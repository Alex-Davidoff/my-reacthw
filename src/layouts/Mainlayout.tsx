import { Outlet } from "react-router"
import { MenuComponent } from "../components/MenuComponent/MenuComponent"

export const Mainlayout = () => {
    return <>
        <MenuComponent/>
        <Outlet/>
    </>
}