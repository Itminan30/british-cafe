import {
    createBrowserRouter
} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../components/Home/Home";
import RecipePage from "../components/RecipePage/RecipePage";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Blog from "../components/Blog/Blog";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://british-cafe-server.vercel.app/')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/recipe/:id',
                element: <PrivateRoute><RecipePage></RecipePage></PrivateRoute>,
                loader: ({params}) => fetch(`https://british-cafe-server.vercel.app/recipe/${params.id}`)
            }
        ]
    },
    {
        path: "*",
        element: <ErrorPage></ErrorPage>
    }
]);

export default router;