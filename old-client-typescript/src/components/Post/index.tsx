import React from 'react'
import { useHistory } from 'react-router'
import { deletePost } from '../../api/Posts'
import { Button, Flex, Text } from '../../ui'

type Props = {
    isUserPosts?: boolean
    name: string
    description: string
    id: string
    requestPosts?: () => void
}

const Post = ({ name, description, id, isUserPosts, requestPosts }: Props) => {
    const history = useHistory()
    const handleDelete = async () => {
        await deletePost(id)
        if (requestPosts) {
            requestPosts()
        }
    }

    const handleUpdate = (postId: string) => {
        history.push(`/my-posts/${postId}`)
    }
    return (
        <Flex
            flexDirection="column"
            border="1px solid #20232a"
            p="10px"
            borderRadius="5px"
            mb="30px"
        >
            <Flex flexDirection="column">
                <Text fontSize="20px" strong mb="15px">
                    {name}
                </Text>
                <Text>{description}</Text>
            </Flex>

            {isUserPosts && (
                <Flex mt="20px">
                    <Button color="red" onClick={handleDelete} mr="20px">
                        Удалить
                    </Button>
                    <Button onClick={() => handleUpdate(id)}>
                        Редактировать
                    </Button>
                </Flex>
            )}
        </Flex>
    )
}

export default Post
