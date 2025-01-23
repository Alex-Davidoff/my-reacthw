import { useEffect, useState } from "react"

export const useFetch = <T,>(endpoint: string, defaultValue: T) => {
    const [object, setObject] = useState<T>(defaultValue);

    useEffect( () => {

        fetch(import.meta.env.VITE_API_URL+endpoint)
        .then((response) => response.json())
        .then((json_response) => {
            setObject(json_response);    
        })

    },[])

    return object;
}