import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "@/context/MainContext";
import Header from "@/components/header";
import Footer from "@/components/footer";

const HomeLayout = () => {
    const { theme } = useContext(DataContext);
    return (
        <div className={`relative ${theme == "dark" ? "dark bg-black text-white" : "text-black"}`}>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default HomeLayout;
