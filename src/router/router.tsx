import { createBrowserRouter } from "react-router";
import { MainLayout } from "../layouts/MainLayout";
import { CarsListPage } from "../pages/CarsListPage";
import { CarsCreatePage } from "../pages/CarsCreatePage";

export const routes = createBrowserRouter([
    {path:'/', element: <MainLayout/>, children: [
        {path: 'carslist', element: <CarsListPage/>},
        {path: 'carscreate', element: <CarsCreatePage/>}
        ]}
]);