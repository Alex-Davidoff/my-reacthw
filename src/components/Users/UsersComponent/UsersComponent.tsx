import { IUser } from "../../../models/IUser";
import UserComponent from "../UserComponent/UserComponent";

interface IUsersProps {
    users: IUser[];
}

const UsersComponent = ({users}: IUsersProps) => {
    return (
        <div className="border border-green-500 mb-2">
            {users.map((user) => <UserComponent key={user.id} user={user}/>)}
        </div>
    );
};

export default UsersComponent;
