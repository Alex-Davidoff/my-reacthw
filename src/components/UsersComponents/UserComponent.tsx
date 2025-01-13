import { useNavigate } from "react-router";
import { IUser } from "../../models/IUser";

interface IUserProps {
    item: IUser;
}

export const UserComponent = ({item}: IUserProps) => {
    const navigation = useNavigate();
    const onBtnCartClick = () => {
        navigation('/users/'+item.id+'/carts');
    }
    
    return (
        <div className="border-2 border-orange-400 rounded-lg mb-0.5 px-1.5 flex">
            <h3 className="mr-4">{item.firstName} {item.lastName}</h3>
            <button onClick={onBtnCartClick} className="w-20 border-2 border-orange-400 rounded-lg">Cart</button>
        </div>
    )
}