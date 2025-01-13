import { ICart } from "../../models/ICarts"
import { ProductComponent } from "./ProductComponent";

interface ICartProps{
    item: ICart;
}

export const CartComponent = ({item}: ICartProps) => {
    return(
        <div>
            {item.products.map((product) => <ProductComponent key={product.id} prod={product}/>)}
            <p className="font-semibold">{item.total}$</p>
        </div>
    )
}