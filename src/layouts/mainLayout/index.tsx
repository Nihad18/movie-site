import { Outlet } from "react-router-dom"
import Header from "@/components/header/Header"
import { DataContext } from "@/context/MainContext"
import { useContext } from "react"


const MainLayout = () => {
    const { theme } = useContext(DataContext)
    return (
        <div className={`relative ${theme == "dark" ? "dark" : ""}`}>
            <Header />
            <main>
                <Outlet />
            </main>

        </div>
    )
}

export default MainLayout