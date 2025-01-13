import { IProduct } from "../../models/ICarts";

interface IProductProps{
    prod: IProduct;
}

export const ProductComponent = ({prod}: IProductProps) => {
    return(
        <div>
        <p>{prod.title} / {prod.price}$</p>
        </div>
    )
}