import { useEffect, useState } from "react";
import { useParams } from "react-router"
import { ICart } from "../../models/ICarts";
import { GetCarts } from "../../services/Carts.api.service";
import { CartComponent } from "./CartComponent";

export const CartsComponent = () => {
    const {id} = useParams();
    const [carts, setCarts] = useState<ICart[]>([]);

    useEffect(() => 
        {
        GetCarts(id).then(({carts}) => setCarts(carts));
        }
    ,[id]);

    return (
        <div>
            {carts.map((cart) => <CartComponent key={cart.id} item={cart}/> )}
        </div>
    )
}