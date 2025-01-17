import { createBrowserRouter } from "react-router";

const routes = createBrowserRouter([
    {path: '/', element: 'MainLayout', children: [
        {path: 'login', element: '/LoginPage'},
        {path: ''}
    ]}
]);