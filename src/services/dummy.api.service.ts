import axios from "axios"
import { IUserLoginPass, IUserLoginPassExp, IUserLoginResponse, IRenewTokenProps, IUserTokens } from "../models/IUserLoginProps"

interface ILoginResponse {
    data: IUserLoginResponse
}

interface IRenewTokenResponse {
    data: IUserTokens
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

export const renewTokens = async () => {
    const renewProps: IRenewTokenProps = {
        refreshToken: localStorage.getItem('rT'),
        expiresInMins : import.meta.env.VITE_TOKEN_LIFETIME
    }
    try {
        const {data}:IRenewTokenResponse =  await axiosInstance.post('/refresh', renewProps);
        if (data) {
            localStorage.setItem('aT', data.accessToken);
            localStorage.setItem('rT', data.refreshToken);
            return data.accessToken;
        }
    } catch (e) {
        console.log(e);
    }
}

export const getApiData = async (resource: string) => {
    try {
    const response = await axiosInstance.get(resource);
    return response.data;
    } catch (e1) {
        console.log('response error. try renew tokens and get new response', e1); 
        try {
        await renewTokens();
        const renewResponse = await axiosInstance.get(resource);
        if (renewResponse) {console.log('new response good')};
        return renewResponse.data;
        } catch (e2) {
            console.log('renew error', e2); 
            return null;           
        }
    }
}