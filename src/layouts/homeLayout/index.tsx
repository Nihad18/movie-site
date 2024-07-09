import { Outlet } from "react-router-dom"
import Header from "@/components/header/Header"
import Footer from "@/components/footer/Footer"
import styles from "./homeLayout.module.scss"
import { useContext } from "react"
import { DataContext } from "@/context/MainContext"

const HomeLayout = () => {
    const { theme } = useContext(DataContext)
    return (
        <div className={`${styles.layout} ${theme == "dark" ? "dark" : ""}`}>
            <Header />
            <main >
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default HomeLayout