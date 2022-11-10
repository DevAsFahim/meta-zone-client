import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import AddService from "../../pages/AddService/AddService";
import Blogs from "../../pages/Blogs/Blogs";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import MyReviews from "../../pages/MyReviews/MyReviews";
import Services from "../../pages/Services/Services";
import SingleService from "../../pages/Services/SingleService";
import SignUp from "../../pages/SignUp/SignUp";
import SingleBlog from "../../pages/SingleBlog/SingleBlog";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path:  '/services/:id',
                element: <SingleService></SingleService>,
                loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/addservice',
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path: '/myreviews',
                element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>,
                loader: () => fetch('http://localhost:5000/blogs')
            },
            {
                path:  '/blogs/:id',
                element: <SingleBlog></SingleBlog>,
                loader: ({params}) => fetch(`http://localhost:5000/blogs/${params.id}`)
            }
        ]
    }
])

export default router;