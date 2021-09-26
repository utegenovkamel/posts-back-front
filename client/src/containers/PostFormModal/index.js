import React, { useContext, useEffect, useState } from 'react'
import * as yup from 'yup'
import { toast } from 'react-toastify'
import { connector } from 'helpers'
import { StateContext } from 'context'
import { Button, Modal, Input } from 'components'
import Form from 'containers/Form'
import { Container } from './styles'

const validationSchema = yup.object().shape({
  Title: yup.string().required().trim(),
  Description: yup.string().required().trim(),
})

const PostFormModal = ({ isOpen, onClose, postId }) => {
  const [postForEdit, setPostForEdit] = useState(null)
  const { updateContent, setUpdateContent, setLoading } =
    useContext(StateContext)

  useEffect(() => {
    if (!postId) return

    const fetchPost = async () => {
      setLoading(true)
      const { data } = await connector.get(`app/post/my/${postId}`)
      setPostForEdit(data)
      setLoading(false)
    }

    fetchPost()
  }, [postId])

  const handleSubmit = async (data) => {
    setLoading(true)

    const { status } = postId
      ? await connector.patch(`app/post/${postId}`, data)
      : await connector.post('app/post', data)

    if (status === 200) toast.success('Post created')
    if (status === 204) {
      setPostForEdit(null)
      toast.success('Post edited')
    }
    setUpdateContent((prev) => !prev)
    onClose()
    setLoading(false)
  }

  return (
    <Container>
      <Modal isOpen={isOpen} onClose={onClose}>
        <Modal.Header>{postId ? 'Edit post' : 'Create post'}</Modal.Header>
        <Form
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
          resetForm={updateContent}
          defaultValues={postId ? postForEdit : {}}
        >
          <Input name="Title" />
          <Input name="Description" />

          <Button type="submit" color="green" fullWidth>
            {postId ? 'Edit' : 'Create'}
          </Button>
        </Form>
      </Modal>
    </Container>
  )
}

export default PostFormModal
