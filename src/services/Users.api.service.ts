import { IUsersResponse } from "../models/IUser";

export const GetUsers = async (): Promise<IUsersResponse> => {
    const responseObj =  await fetch(`${import.meta.env.VITE_API_URL}/users`)
    .then(res => res.json());
    return responseObj;
}