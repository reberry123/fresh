'use client'

import Link from "next/link"
import styles from "./page.module.css"
import { useRouter } from "next/navigation"

export default function Sidebar() {
    const router = useRouter()

    return (
        <div className={styles.sidebar}>
            <div className="nav">
                <ul className={styles.admin_list}>
                    <li className={styles.admin_item}>
                        <Link href="/admin" style={{display: "block"}}>홈</Link>
                    </li>
                    <li className={styles.admin_item}>
                        <Link href="/admin/write" style={{display: "block"}}>새 글 쓰기</Link>
                    </li>
                    <li className={styles.admin_item}>
                        <Link href="/admin/list" style={{display: "block"}}>글 목록</Link>
                    </li>
                    <li className={styles.admin_item}>
                        <Link href="/admin/table" style={{display: "block"}}>회원 관리</Link>
                    </li>
                </ul>
            </div>
            <div className={styles.bottom_menu}>
                <span onClick={()=>{
                    router.refresh()
                    router.push('/')
                }} style={{color: "white"}}>⨞ 돌아가기</span>
            </div>
        </div>
    )
}