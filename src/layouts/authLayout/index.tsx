import { Outlet, useNavigate } from "react-router-dom";
import Header from "@/components/header/Header";
import { DataContext } from "@/context/MainContext";
import { useContext, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import styles from "./authLayout.module.scss"
import LazyLoadBackgroundImage from "@/components/LazyLoadBackgroundImage ";
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
        <div className={`${theme === "dark" ? "dark" : ""}`}>
            <LazyLoadBackgroundImage src="/bg-cover.png" className={`${styles['bg-image']} relative`}>
                <Header />
                <main>
                    <Outlet />
                </main>
            </LazyLoadBackgroundImage>
        </div>
    );
}

export default AuthLayout;
