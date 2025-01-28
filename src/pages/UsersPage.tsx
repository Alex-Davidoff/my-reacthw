import { useEffect } from "react";
import { useMainDispatch, useMainSelector } from "../redux/store"
import { userActions } from "../redux/slices/UserSlice";

export const UsersPage = () => {
    const dispatch = useMainDispatch();
    const users = useMainSelector((state) => state.userStoreSlice.users);

    useEffect(() => {
        dispatch(userActions.loadUsers());
    },[]);

    return (
        <div>
        {users.map((user) => (
            <div key={user.id}>
                {user.name}
            </div>
        ))}
        </div>
    )
}