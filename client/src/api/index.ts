import axios from 'axios'
import { Auth, JwtData, PostData } from '../types'

const BASE_URL: string | undefined = process.env.REACT_APP_BASE_URL
const axiosApiInstance = axios.create({
    baseURL: BASE_URL,
})
// let isRefreshing = false
// let failedQueue: Array<any> = []

// const processQueue = (error: any, token = null) => {
//     failedQueue.forEach((prom) => {
//         if (error) {
//             prom.reject(error)
//         } else {
//             prom.resolve(token)
//         }
//     })

//     failedQueue = []
// }

axiosApiInstance.interceptors.request.use(
    async (config) => {
        const access_token = await localStorage.getItem('access_token')
        if (!access_token) {
            return config
        }
        const newConfig = {
            headers: {},
            ...config,
        }
        newConfig.headers.Authorization = `Bearer ${access_token}`
        return newConfig
    },
    (error) => {
        Promise.reject(error)
    }
)

// axiosApiInstance.interceptors.response.use(
//     (res) => {
//       return res
//     },
//     async (error) => {
//       const originalRequest = error.config
//       if (
//         error.config.url === '/api/refresh' &&
//         error?.response &&
//         error?.response?.status === 401
//       ) {
//         clearToken()
//         window.location.href = '/login'
//       }
//       if (error)
//         if (
//           error?.response &&
//           error?.response?.status === 401 &&
//           !originalRequest._retry
//         ) {
//           if (isRefreshing) {
//             return new Promise(function (resolve, reject) {
//               failedQueue.push({ resolve, reject })
//             })
//               .then((token) => {
//                 originalRequest.headers['Authorization'] = 'Bearer ' + token
//                 return axiosApiInstance(originalRequest)
//               })
//               .catch((err) => {
//                 return Promise.reject(err)
//               })
//           }

//           originalRequest._retry = true
//           isRefreshing = true

//           const refresh_token = localStorage.getItem('refresh_token')

//           return new Promise(function (resolve, reject) {
//             axiosApiInstance
//               .post('/api/refresh', { refresh_token })
//               .then(({ data }) => {
//                 setToken(data)

//                 axios.defaults.headers.common['Authorization'] =
//                   'Bearer ' + data.access_token
//                 originalRequest.headers['Authorization'] =
//                   'Bearer ' + data.access_token
//                 processQueue(null, data.access_token)
//                 resolve(axiosApiInstance(originalRequest))
//               })
//               .catch((err) => {
//                 clearToken()
//                 window.location.href = '/login'
//                 processQueue(err, null)
//                 reject(err)
//               })
//               .finally(() => {
//                 isRefreshing = false
//               })
//           })
//         } else {
//           toast(error.message)
//         }

//       return Promise.reject(error)
//     }
//   )

export const register = async (authData: Auth) => {
    try {
        const { data }: any = await axios.post('/api/auth/register', authData)
        alert(data)
        return data
    } catch (error) {
        if (error.response) {
            console.log(error.response)
            // toast
            alert(error.response.data)
        } else {
            console.log(error)
        }
        return error
    }
}

export const login = async (authData: Auth) => {
    try {
        const data: any = await axios.post('/api/auth/login', authData)
        await setToken(data.data)
        return data
    } catch (error) {
        if (error.response) {
            console.log(error.response)
            // toast
            alert(error.response.data)
        } else {
            console.log(error)
        }
        return error
    }
}

export const getResource = async (urlInfo: string) => {
    try {
        const res = await axiosApiInstance.get(`/api/${urlInfo}`)
        return await res.data
    } catch (error) {
        if (error.response) {
            console.log(error.response)
            // toast
            alert(error.response.data)
        } else {
            console.log(error)
        }
        return error
    }
}

export const requestCreate = async (urlInfo: string, data: PostData) => {
    try {
        const res = await axiosApiInstance.post(`/api/${urlInfo}`, data)
        return res
    } catch (error) {
        if (error.response) {
            console.log(error.response)
            // toast
            alert(error.response.data)
        } else {
            console.log(error)
        }
        return error
    }
}

export const requestPut = async (urlInfo: string, data: PostData) => {
    try {
        const res = await axiosApiInstance.put(`/api/${urlInfo}`, data)
        return res
    } catch (error) {
        if (error.response) {
            console.log(error.response)
            // toast
            alert(error.response.data)
        } else {
            console.log(error)
        }
        return error
    }
}

export const requestDelete = async (urlInfo: string) => {
    try {
        const res = await axiosApiInstance.delete(`/api/${urlInfo}`)
        return await res.data
    } catch (error) {
        if (error.response) {
            console.log(error.response)
            // toast
            alert(error.response.data)
        } else {
            console.log(error)
        }
        return error
    }
}

export const setToken = async (data: JwtData) => {
    if (data.token && data.userId) {
        await localStorage.setItem('access_token', data.token)
        await localStorage.setItem('userId', data.userId)
    }
}

export const clearToken = async () => {
    await localStorage.removeItem('access_token')
}
