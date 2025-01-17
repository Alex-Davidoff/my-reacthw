export interface IUserLoginPass {
    username: string,
    password: string     
}

export interface IUserLoginPassExp extends IUserLoginPass {
    expiresInMins: number
}