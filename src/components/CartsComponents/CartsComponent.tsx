import { useParams } from "react-router"

export const CartsComponent = () => {
    const {id} = useParams();
    console.log(id);
    
    return (
        <>

        </>
    )
}