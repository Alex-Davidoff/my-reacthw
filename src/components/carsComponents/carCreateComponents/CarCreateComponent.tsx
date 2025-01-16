import { joiResolver } from "@hookform/resolvers/joi";
import { useForm } from "react-hook-form"
import { carValidator } from "../../../validators/car.validator";
import { addCar } from "../../../services/cars.api.service";
import { IFormProps } from "../../../models/ICar";

export const CarCreateComponent = () => {
    const {handleSubmit, register, formState: {errors}} 
        = useForm<IFormProps>({mode: 'all', resolver: joiResolver(carValidator)});

    const customHandler = (formDataProps: IFormProps) => {
        addCar(formDataProps); 
             
    }

    return(
        <div className="car_create_component">
            <form onSubmit={handleSubmit(customHandler)} className="flex flex-col justify-start gap-1">
                <span className="flex gap-1">
                <input type="text" {...register('brand')} placeholder="Car brand" className="border border-black"/>
                <input type="number" {...register('year')} placeholder="Year" className="border border-black"/>
                <input type="number" {...register('price')} placeholder="Price" className="border border-black"/>
                </span>
                <div className="errors_box">
                    <p>{errors?.brand?.message}</p>
                    <p>{errors?.year?.message}</p>
                    <p>{errors?.price?.message}</p>
                </div>
                <button className="border border-black rounded-xl w-24 shadow-md">Add car</button>
            </form>
        </div>
    )
}