import Layout from "@/layout"
import Home from "@/pages/home/Home"
import MovieList from "@/pages/movieList/MovieList"
import NotFound from "@/pages/notFound/NotFound"
import { createBrowserRouter } from "react-router-dom"


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
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
                path: '*',
                element: <NotFound />
            }
        ]
    }
])
