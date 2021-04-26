export type Auth = {
    email: string
    password: string
}

export type JwtData = {
    userId: string
    token: string
}

export type PostType = {
    name: string
    description: string
    _id: string
    createdBy: string
}

export type PostData = {
    _id?: string
    name: string
    description: string
}
