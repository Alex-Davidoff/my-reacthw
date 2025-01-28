import { IUser } from "../../../models/IUser";

interface IUserProps {
    user: IUser;
}

const UserComponent = ({user}: IUserProps) => {
    return (
        <p className="text-green-700">{user.name}</p>
    );
};

export default UserComponent;
