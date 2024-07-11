import styles from "./page.module.css"

export default function Item({result}) {
    return (
        <div className={styles.table_form}>
            <table>
                <tbody>
                    <tr>
                        <th scope="col" style={{width: "240px"}}>이름</th>
                        <th scope="col" style={{width: "100px"}}>등급</th>
                        <th scope="col" style={{width: "360px"}}>이메일</th>
                        <th scope="col" style={{width: "100px"}}>나이</th>
                        <th scope="col" style={{width: "240px"}}>가입날짜</th>
                    </tr>
                    {result.map((a, i)=>{
                        return(
                            <tr key={i}>
                                <td>{a.name}</td>
                                <td>{a.role}</td>
                                <td>{a.email}</td>
                                <td>24</td>
                                <td>2024.06.26</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}