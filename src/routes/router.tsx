import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import { LoginPage } from "../pages/LoginPage";
import { UserPage } from "../pages/UserPage";
import { PostsPage } from "../pages/PostsPage";

export const routes = createBrowserRouter([
    {path: '/', element: <MainLayout/>, children: [
        {path: 'login', element: <LoginPage/>},
        {path: '/auth', children: [
            {path: '/user', element: <UserPage/>},
            {path: '/posts', element: <PostsPage/>}
        ]}
    ]}
]);