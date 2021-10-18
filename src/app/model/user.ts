export interface UserModel {
    email?: string,
    name: string,
    password?: string,
}

export interface AuthModel {
    email?: string,
    password?: string,
}

export interface Token {
    token: string,
}
