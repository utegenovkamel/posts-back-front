import React, { useContext } from 'react'
import { Modal, Button } from 'components'
import { connector } from 'helpers'
import { toast } from 'react-toastify'
import { StateContext } from 'context'
import { Buttons } from './styles'

const DeletePostModal = ({ isOpen, onClose, postId }) => {
  const { setUpdateContent } = useContext(StateContext)

  const handleConfirm = async () => {
    const { status } = await connector.delete(`app/post/${postId}`)
    if (status === 200) {
      toast.success('Post was deleted')
      setUpdateContent((prev) => !prev)
      onClose()
    }
  }
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Modal.Header>Delete this post?</Modal.Header>
      <Buttons>
        <Button color="grey" onClick={onClose}>
          No
        </Button>
        <Button color="green" onClick={handleConfirm}>
          Yes
        </Button>
      </Buttons>
    </Modal>
  )
}

export default DeletePostModal
