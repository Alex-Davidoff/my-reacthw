import { createBrowserRouter } from "react-router";
import { Mainlayout } from "../layouts/MainLayout";
import { UsersPage } from "../pages/UsersPage";
import { CartsPage } from "../pages/CartsPage";

export const routes = createBrowserRouter([
    {
        path: '/', element: <Mainlayout/>, children: [
            {path: 'users', element: <UsersPage/>, children: [
                {path: ':id/carts', element: <CartsPage/>}
            ]}
        ]
    }
]);