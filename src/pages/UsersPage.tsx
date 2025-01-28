import { useEffect } from "react";
import { useMainDispatch, useMainSelector } from "../redux/store"
import { userActions } from "../redux/slices/UserSlice";
import UsersComponent from "../components/Users/UsersComponent/UsersComponent";

export const UsersPage = () => {
    const dispatch = useMainDispatch();
    const users = useMainSelector((state) => state.userStoreSlice.users);

    useEffect(() => {
        dispatch(userActions.loadUsers());
    },[]);

    return (
        <div>
            <UsersComponent users={users}/>
        </div>
    )
}