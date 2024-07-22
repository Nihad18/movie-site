import { Outlet } from "react-router-dom";
import { DataContext } from "@/context/MainContext";
import { useContext } from "react";
import Header from "@/components/header";

const MainLayout = () => {
    const { theme } = useContext(DataContext);
    return (
        <div className={`relative ${theme == "dark" ? "dark bg-black text-white" : "text-black"}`}>
            <Header />
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default MainLayout;
