import ReactDOM from "react-dom/client";
import "./styles/main.scss";
import { BrowserRouter, } from "react-router-dom";
import { DataProvider } from "./context/MainContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthProvider from "./context/AuthContext";
import App from "./App";

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")!).render(
    <QueryClientProvider client={queryClient}>
        <DataProvider>
            <BrowserRouter>
                <AuthProvider>
                    <App />
                </AuthProvider>
            </BrowserRouter>
        </DataProvider>
    </QueryClientProvider>,
);
