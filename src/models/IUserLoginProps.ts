export interface IUserLoginPass {
    username: string,
    password: string     
}

export interface IUserLoginPassExp extends IUserLoginPass {
    expiresInMins: number
}

export interface IRenewTokenProps {
    refreshToken: string | null,
    expiresInMins: number
}

export interface IUserTokens {
    accessToken: string;
    refreshToken: string;
}

export interface IUserLoginResponse extends IUserTokens{
    id: number;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    gender: string;
    image: string;
  }