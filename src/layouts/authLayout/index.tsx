import { Outlet, useNavigate } from "react-router-dom";
import Header from "@/components/header/Header";
import { DataContext } from "@/context/MainContext";
import { useContext, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";

const AuthLayout = () => {
    const navigate = useNavigate();
    const user = useAuth();
    const { theme } = useContext(DataContext);

    useEffect(() => {
        if (user?.token) {
            navigate("/");
        }
    }, [user, navigate]);

    return (
        <div className={`relative ${theme === "dark" ? "dark" : ""}`}>
            <Header />
            <main>
                <Outlet />
            </main>
        </div>
    );
}

export default AuthLayout;
