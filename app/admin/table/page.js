import { connectDB } from "@/util/database"
import Item from "./Item"
import styles from "./page.module.css"

export default async function Table() {
    const client = await connectDB;
    const db = client.db("forum")
    let result = await db.collection("user_cred").find().toArray()

    return (
        <div className={styles.table_container}>
            <h1>회원 관리</h1>
            <Item result={result}></Item>
        </div>
    )
}