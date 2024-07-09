import styles from "./login.module.scss"
const Login = () => {
  return (
    <div style={{backgroundImage:"url(/bg-cover.png)"}} className={styles.login}>
      <h1 className={`${styles.form} dark:text-white text-black dark:bg-black`}>Login</h1>
    </div>
  )
}

export default Login