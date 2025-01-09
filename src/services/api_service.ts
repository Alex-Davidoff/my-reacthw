import { IDummyResponse } from "../models/IDummyResponse"

export const GetAllTodos = async ():Promise<IDummyResponse> => {
    const responseObj = await fetch(import.meta.env.VITE_API_URL)
    .then(response => response.json());
    return responseObj;
}