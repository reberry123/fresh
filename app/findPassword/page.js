import { connectDB } from "@/util/database"
import styles from "./page.module.css"

export default function FindPassword() {
    const find = async (e)=> {
        const client = await connectDB;
        const db = client.db("forum");
        let result = await db.collection("user_cred").findOne({
            name: e.target.name.value
        })

        console.log(result)
    }
    

    return (
        <div className="container">
            <h1>로그인</h1>
            <div className={styles.find_form}>
                <h2>비밀번호 찾기</h2>
                <div className={styles.find_area}>
                    <form action="/api/auth/find" method="POST">
                        <input className={styles.form_control} name="name" placeholder="이름"></input>
                        <input className={styles.form_control} name="email" placeholder="이메일"></input>
                        <input name="type" defaultValue="password" style={{display: "none"}}></input>
                        <button type="submit" className={styles.form_submit} >비밀번호 찾기</button>
                    </form>
                </div>
            </div>
        </div>
    )
}