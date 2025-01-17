import { Navigate, createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import { LoginPage } from "../pages/LoginPage";
import { UserPage } from "../pages/UserPage";
import { PostsPage } from "../pages/PostsPage";
import { AuthorizedLayout } from "../layouts/AuthorizedLayout";


export const routes = createBrowserRouter([
    {path: '/', element: <MainLayout/>, children: [
        {index:true, element: <Navigate to='login' replace />},
        {path: 'login', element: <LoginPage/>},
        {path: 'auth', element: <AuthorizedLayout/>, children: [
            {path: 'user', element: <UserPage/>},
            {path: 'posts', element: <PostsPage/>}
        ]}
    ]}
]);