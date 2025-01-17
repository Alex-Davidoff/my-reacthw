export interface IUserLoginPass {
    username: string,
    password: string     
}

export interface IUserLoginPassExp extends IUserLoginPass {
    expiresInMins: number
}

export interface IUserLoginResponse {
    id: number;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    gender: string;
    image: string;
    accessToken: string;
    refreshToken: string;
  }