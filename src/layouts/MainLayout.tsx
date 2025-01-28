import { Outlet } from "react-router"
import { MenuComponent } from "../components/Menu/MenuComponent"

export const MainLayout = () => {
    return(
        <div>
        <MenuComponent/>    
        <Outlet/>
        </div>
    )
}