import axios from "axios"
import { IUserLoginPass, IUserLoginPassExp } from "../models/IUserLoginProps"

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})

export const userLogin = async ({username, password}: IUserLoginPass) => {
    const userProps: IUserLoginPassExp = {
        username: username,
        password: password,
        expiresInMins : import.meta.env.VITE_TOKEN_LIFETIME
        }
    const loginAnswer =  await axiosInstance.post('/auth/login', userProps);
    return loginAnswer;
}