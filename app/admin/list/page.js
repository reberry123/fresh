import { connectDB } from "@/util/database"
import Article from "./Article";
import styles from "./page.module.css"

export default async function List() {
    const client = await connectDB;
    const db = client.db("forum")
    let result = await db.collection("post").find().toArray()
    result = result.map((a)=>{
        a._id = a._id.toString()
        return a
    })

    return (
        <div className={styles.list_container}>
            <h1>글 목록</h1>
            <Article result={result}></Article>
        </div>
    )
}