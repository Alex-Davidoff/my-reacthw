import { IUser } from "../../models/IUser";

interface IUserProps {
    item: IUser;
}

export const UserComponent = ({item}: IUserProps) => {
    return (
        <h3 className="">
            {item.id} = {item.firstName} {item.lastName} / {item.username}</h3>
    )
}