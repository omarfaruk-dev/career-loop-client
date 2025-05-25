import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home/Home";


const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        children: [
            {
                path: '/',
                Component: Home,
            },
            {
                path: '/contact',
                element: <h2>Contact Page</h2>            
            },
            {
                path: '*',
                Component: ErrorPage
            }
        ]
    }
])


export default router;