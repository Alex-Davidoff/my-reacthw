import axios from "axios"
import { IUserLoginPass, IUserLoginPassExp } from "../models/IUserLoginProps"

const axiosInstance = axios.create({
    baseURL: `${import.meta.env.VITE_API_URL}/auth`
})

axiosInstance.interceptors.request.use((requestObj) => {
    if (requestObj.method?.toUpperCase()==='GET'){
        requestObj.headers.Authorization = 'Bearer ' + localStorage.getItem('aT');
    }
    return requestObj;
});

export const userLogin = async ({username, password}: IUserLoginPass) => {
    const userProps: IUserLoginPassExp = {
        username: username,
        password: password,
        expiresInMins : import.meta.env.VITE_TOKEN_LIFETIME
        }
    const loginAnswer =  await axiosInstance.post('/login', userProps);
    return loginAnswer;
}

export const getCurrentUser = async () => {
    const {data} = await axiosInstance.get('/me');
    console.log(data);
    return data;
}