import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import SignIn from "../pages/SignIn/SignIn";


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
                path: '/register',
                Component: Register,          
            },
            {
                path: '/signin',
                Component: SignIn,
            },
            {
                path: '*',
                Component: ErrorPage
            }
        ]
    }
])


export default router;