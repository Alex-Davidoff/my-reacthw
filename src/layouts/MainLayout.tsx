import { Outlet } from "react-router"
import { MenuComponent } from "../components/Menu/MenuComponent"

export const Mainlayout = () => {
    return <>
        <MenuComponent/>
        <Outlet/>
    </>
}