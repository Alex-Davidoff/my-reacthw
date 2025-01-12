import { IPostsResponse } from "../models/IPost";

export const GetPosts = async (): Promise<IPostsResponse> => {
    const responseObj = await fetch(`${import.meta.env.VITE_BASE_URL}/posts`)
    .then(res => res.json()); 
    return responseObj;
}