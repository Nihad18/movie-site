import { useContext } from "react";
import styles from "./header.module.scss";
import { DataContext } from "@/context/MainContext";
import { Link } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { Button } from "../ui/Button";

const Header = () => {
  const { theme, setTheme } = useContext(DataContext)
  const user = useAuth();
  return (
    <header className={`${styles.header}`}>
      <div className="container">
        <div className="flex items-center justify-between">
          <Link to="/" className={styles.logo}>
            <img src="/logo.svg" alt="logo" />
          </Link>
          <div className="flex items-center gap-[34px]">
            <label className={styles["switch"]}>
              <input type="checkbox" checked={theme == "dark"} onChange={() => setTheme(prev => prev == "dark" ? "light" : "dark")} />
              <span className={styles.slider}></span>
            </label>
            {
              user?.token ? <Button onClick={user?.logOut}>Logout</Button> :
                <Link to="/login" className="profile block p-[6px] cursor-pointer">
                  <img src="/account.svg" alt="account-icon" />
                </Link>
            }
          </div>
        </div>
      </div>
    </header >
  )
}

export default Header