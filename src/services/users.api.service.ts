import { IUsersResponse } from "../models/IUser";

export const getUsers = async (fskip: string, flimit: string): Promise<IUsersResponse> => {
    const responseObj =  await fetch(`${import.meta.env.VITE_API_URL}/users?skip=${fskip}&limit=${flimit}`)
    .then(res => res.json());
    return responseObj;
}