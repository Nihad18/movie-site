import ReactDOM from "react-dom/client";
import "./styles/main.scss";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes";
import { DataProvider } from "./context/MainContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")!).render(
    <QueryClientProvider client={queryClient}>
        <DataProvider>
            <RouterProvider router={routes} />
        </DataProvider>
        ,
    </QueryClientProvider>,
);
