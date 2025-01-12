import { IUser } from "../../models/IUser"

interface IUserProps {
    item: IUser;
}

export const UserComponent = ({item}: IUserProps) => {
    return (
        <h3 className="border-2 border-blue-400 rounded-lg mb-0.5 px-1.5">
            {item.id} = {item.firstName} {item.lastName} / {item.username}</h3>
    )
}