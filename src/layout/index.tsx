import { Outlet } from "react-router-dom"
import styles from "./layout.module.scss"
import Footer from "@/components/footer/Footer"
import Header from "@/components/header/Header"


const Layout = () => {
    return (
        <div className={styles.layout}>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer/>
        </div>
    )
}

export default Layout