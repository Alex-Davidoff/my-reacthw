import { Outlet } from "react-router"
import { UsersComponent } from "../components/UsersComponents/UsersComponent"

export const UsersPage = () => {
    return (
        <div>
        <Outlet/>
        <UsersComponent/>
        </div>
    )
}