import { createBrowserRouter } from "react-router";
import { Mainlayout } from "../layouts/MainLayout";
import { UsersPage } from "../pages/UsersPage";

export const routes = createBrowserRouter([
    {
        path: '/', element: <Mainlayout/>, children: [
            {path: 'users', element: <UsersPage/>}
        ]
    }
]);