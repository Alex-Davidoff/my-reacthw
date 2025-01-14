import { IUser } from "../../models/IUser";

interface IUserProps {
    item: IUser;
}

export const UserComponent = ({item}: IUserProps) => {
    
    return (
        <div className=""> 
        {/* border-2 border-blue-400 rounded-lg px-1.5 */}
            <h3 className="">{item.id} {item.firstName} {item.lastName}</h3>
        </div>
    )
}