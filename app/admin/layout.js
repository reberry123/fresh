import Sidebar from "./Sidebar"
import "./global.css"
import styles from "./page.module.css"

export default function Layout({children}) {
    return (
        <div className={styles.wrapper}>
            <Sidebar></Sidebar>
            <div className={styles.admin_container}>
                {children}
            </div>
        </div>
        
    )
}