import Home from "@/pages/home/Home"
import Login from "@/pages/auth/login/Login"
import MovieList from "@/pages/movieList/MovieList"
import NotFound from "@/pages/notFound/NotFound"
import { createBrowserRouter } from "react-router-dom"
import Register from "@/pages/auth/register/Register"
import MainLayout from "@/layouts/mainLayout"
import Order from "@/pages/order/Order"
import HomeLayout from "@/layouts/homeLayout"


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: ":slug",
                element: <MovieList />,
            }
        ]
    }, {
        path: "/login",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Login />,
            },
        ],
    },
    {
        path: "/register",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Register />,
            },
        ],
    },
    {
        path: "/order",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Order />,
            },

        ],
    },
    {
        path: '*',
        element: <NotFound />
    }
])
