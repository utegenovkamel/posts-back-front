import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { getPost, updatePost } from '../../api/Posts'
import useInput from '../../hooks/input.hook'
import { Button, Flex, Input, Label, Text } from '../../ui'

type Params = {
    postId: string
}

const UpdatePostPage = () => {
    const name = useInput('')
    const description = useInput('')
    const { postId }: Params = useParams()

    const requestUpdate = async () => {
        const data = await getPost(postId)
        name.setValue(data.name)
        description.setValue(data.description)
    }

    useEffect(() => {
        requestUpdate()
    }, [])

    const handleUpdate = async () => {
        const res = await updatePost({
            _id: postId,
            name: name.value,
            description: description.value,
        })
        alert(res.data)
    }

    return (
        <Flex flexDirection="column">
            <Text fontSize="30px" strong mb="25px">
                Update post
            </Text>
            <Flex flexDirection="column" width="500px">
                <Flex flexDirection="column" mb="20px">
                    <Label htmlFor="name">Enter your name</Label>
                    <Input
                        {...name}
                        id="name"
                        type="text"
                        placeholder="Name..."
                    />
                </Flex>
                <Flex flexDirection="column" mb="20px">
                    <Label htmlFor="description">Enter your description</Label>
                    <Input
                        {...description}
                        id="description"
                        type="text"
                        placeholder="Description..."
                    />
                </Flex>
                <Button onClick={handleUpdate} color="primary">
                    Update
                </Button>
            </Flex>
        </Flex>
    )
}

export default UpdatePostPage
