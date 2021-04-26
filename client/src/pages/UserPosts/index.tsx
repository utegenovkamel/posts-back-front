import React, { useEffect, useState } from 'react'
import { getUsersPosts } from '../../api/Posts'
import Post from '../../components/Post'
import { PostType } from '../../types'

const UserPostsPage = () => {
    const [posts, setPosts] = useState<PostType[] | null>(null)
    const [loading, setLoading] = useState(true)

    const requestPosts = async () => {
        setLoading(true)
        const data = await getUsersPosts()
        setPosts(data)
        setLoading(false)
    }

    useEffect(() => {
        requestPosts()
    }, [])

    if (loading) {
        return <div>Loading...</div>
    }
    if (!posts || posts.length === 0) {
        return <div>No posts</div>
    }

    return (
        <>
            {posts.map((post) => {
                return (
                    <Post
                        key={post._id}
                        name={post.name}
                        description={post.description}
                        id={post._id}
                        isUserPosts
                        requestPosts={requestPosts}
                    />
                )
            })}
        </>
    )
}

export default UserPostsPage
