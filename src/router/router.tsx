import { createBrowserRouter } from "react-router";
import { Mainlayout } from "../layouts/Mainlayout";
import { UsersPage } from "../pages/UsersPage";
import { PostsPage } from "../pages/PostsPage";

export const routes = createBrowserRouter([
    {
        path: '/', element: <Mainlayout/>, children:[
            {path: 'users', element: <UsersPage/>},
            {path: 'posts', element: <PostsPage/>}]
    }
]);