import axios from "axios"
import { IUserLoginPass, IUserLoginPassExp, IUserLoginResponse } from "../models/IUserLoginProps"

interface ILoginResponse {
    data: IUserLoginResponse
}

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
    try {
        const {data}:ILoginResponse =  await axiosInstance.post('/login', userProps);
        if (data) {
            localStorage.setItem('aT', data.accessToken);
            localStorage.setItem('rT', data.refreshToken);
            localStorage.setItem('userId', (data.id).toString());
            return data.id;
        }
    } catch {
        localStorage.clear();
        return false;
    }
}

export const getCurrentUser = async () => {
    const {data} = await axiosInstance.get('/me');
    return data;
}