import { createBrowserRouter } from "react-router";
import { Mainlayout } from "../layouts/Mainlayout";

export const routes = createBrowserRouter([
    {
        path: '/', element: <Mainlayout/>
    }
]);