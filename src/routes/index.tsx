import { RouteObject } from "react-router-dom";
import MainLayout from "@/layouts/mainLayout";
import HomeLayout from "@/layouts/homeLayout";
import AuthLayout from "@/layouts/authLayout";
import Home from "@/pages/home";
import NotFound from "@/pages/notFound";
import Login from "@/pages/auth/login";
import Register from "@/pages/auth/register";
import MovieList from "@/pages/movieList";
import Order from "@/pages/order";

export const routes: RouteObject[] = [
    {
        path: "/",
        element: <HomeLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: ":slug",
                element: <MovieList />,
            },
            {
                path: "not-found",
                element: <NotFound />,
            },
            {
                path: "*",
                element: <NotFound />,
            },
        ],
    },
    {
        path: "/login",
        element: <AuthLayout />,
        children: [
            {
                index: true,
                element: <Login />,
            },
        ],
    },
    {
        path: "/register",
        element: <AuthLayout />,
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

];
