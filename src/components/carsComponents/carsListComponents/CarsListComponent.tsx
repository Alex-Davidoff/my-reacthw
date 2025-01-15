import { useEffect, useState } from "react"
import { ICar } from "../../../models/ICar"
import { getCars } from "../../../services/cars.api.service";
import { CarComponent } from "./CarComponent";

export const CarsListComponent = () => {
    const [cars, setCars] = useState<ICar[]>([]);

    useEffect(() => {
        getCars().then((getCarsResponse) => setCars(getCarsResponse));      
    },[]);

    return(
        <div className="cars_list_component">
            {
                cars.map((car) => <CarComponent key={car.id} car={car}/>)
            }
        </div>
    )
}