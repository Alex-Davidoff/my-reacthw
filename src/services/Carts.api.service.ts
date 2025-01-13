import { ICartsResponse } from "../models/ICarts";

export const GetCarts = async (id: string): Promise<ICartsResponse> => {
    const responseObj =  await fetch(`${import.meta.env.VITE_API_URL}/carts/user/${id}`)
    .then(res => res.json());
    return responseObj;
}