import { ICar } from "../../../models/ICar"

interface ICarProps{
    car: ICar
}

export const CarComponent = ({car}: ICarProps) => {
    return(
        <div className="car">
            {car.brand} ({car.year}) = {car.price}$
        </div>
    )
}