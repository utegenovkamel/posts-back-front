import React, { useEffect, useState } from 'react'
import { getPosts } from '../../api/Posts'
import Post from '../../components/Post'
import { PostType } from '../../types'

const AllPostsPage = () => {
    const [posts, setPosts] = useState<PostType[] | null>(null)
    const [loading, setLoading] = useState(true)
    const requestPosts = async () => {
        const data = await getPosts()
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
                    />
                )
            })}
        </>
    )
}

export default AllPostsPage
