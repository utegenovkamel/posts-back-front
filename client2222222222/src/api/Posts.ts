import { PostData, PostType } from './../types'
import { getResource, requestCreate, requestDelete, requestPut } from './index'

export const getPosts = async (): Promise<PostType[]> => {
    return await getResource('posts')
}

export const getUsersPosts = async (): Promise<PostType[]> => {
    return await getResource(`posts/my`)
}

export const getPost = async (postId: string): Promise<PostType> => {
    return await getResource(`posts/my/${postId}`)
}

export const deletePost = async (postId: string): Promise<PostType[]> => {
    return await requestDelete(`posts/${postId}`)
}

export const createPost = async (postData: PostData): Promise<any> => {
    return await requestCreate(`posts`, postData)
}

export const updatePost = async (postData: PostData): Promise<any> => {
    return await requestPut(`posts`, postData)
}
