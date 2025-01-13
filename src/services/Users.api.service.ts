import { IUsersResponse } from "../models/IUser";

console.log(`${import.meta.env.VITE_API_URL}/users`);

export const GetUsers = async (): Promise<IUsersResponse> => {
    const responseObj = await fetch(`${import.meta.env.VITE_BASE_URL}/users`)
    .then(res => res.json());
    
    console.log(responseObj);

    return responseObj;
}