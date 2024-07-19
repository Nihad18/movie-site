import ReactDOM from "react-dom/client";
import "./styles/main.scss";
import { BrowserRouter, } from "react-router-dom";
import { DataProvider } from "./context/MainContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthProvider from "./context/AuthContext";
import App from "./App";
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51PeAeq2NWLWBxvk4QA4Gmoq3NYptZGnihFG9EnmCx32vhTFrrBwwWiUT9zRI6RtXFy37uuhPPvafrw6m2YipHzrK004ri689Wi')

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")!).render(
    <QueryClientProvider client={queryClient}>
        <DataProvider>
            <BrowserRouter>
                <AuthProvider>
                    <Elements stripe={stripePromise}>
                        <App />
                    </Elements>
                </AuthProvider>
            </BrowserRouter>
        </DataProvider>
    </QueryClientProvider>,
);
