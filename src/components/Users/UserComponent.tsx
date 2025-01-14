import { IUser } from "../../models/IUser";

interface IUserProps {
    item: IUser;
}

export const UserComponent = ({item}: IUserProps) => {
    
    return (
        <div className="">
            <h3 className="">{item.id} {item.firstName} {item.lastName}</h3>
        </div>
    )
}