import axios from "axios";
import { ICar } from "../models/ICar";

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_OWU_CARS_API_URL
});

export const getCars = async (): Promise<ICar[]> => {
    const {data} = await axiosInstance.get('/cars');
    return data;
}