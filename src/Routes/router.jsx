import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import SignIn from "../pages/SignIn/SignIn";
import JobDetails from "../pages/JobDetails/JobDetails";
import PrivateRoutes from "./PrivateRoutes";
import JobApply from "../pages/JobApply/JobApply";
import MyApplications from "../pages/MyApplications/MyApplications";
import AddJob from "../pages/AddJob/AddJob";


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
                path: 'add-job',
                element: <PrivateRoutes><AddJob/></PrivateRoutes>
            },
            
            {
                path: '/job-details/:id',
                loader: ({params}) => fetch(`http://localhost:3000/jobs/${params.id}`),
                Component: JobDetails,
            },
            {
                path: 'job-apply/:id',
                element:<PrivateRoutes><JobApply/></PrivateRoutes>
            },
            {
                path: 'my-applications',
                element: <PrivateRoutes><MyApplications/></PrivateRoutes>
            },
            {
                path: '*',
                Component: ErrorPage
            }, 
        ]
    }
])


export default router;