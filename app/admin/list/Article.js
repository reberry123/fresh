"use client"

import { useState } from "react"
import styles from "./page.module.css"

export default function Article({result}) {
    const [checkItems, setCheckItems] = useState([])

    const handleSingleCheck = (id) => {
        const checked = checkItems.includes(id)

        if (checked) {
            setCheckItems((prev) => prev.filter((el) => el !== id));
        } else {
            setCheckItems((prev) => [...prev, id]);
        }
    };

    const handleAllCheck = (checked) => {
        if(checked) {
            setCheckItems(result.map(a => a._id));  
        }
        else {
            setCheckItems([]);
        }
    }

    const deletePost = () => {
        // checkItems.map((a, i) => {
        //     fetch('/api/post/delete', {
        //         method: "DELETE",
        //         body: a
        //     })
        // })

        
    }

    return(
        <div className="article">
            <div className={styles.control_panel}>
                <button className={styles.control_button} onClick={deletePost}>삭제</button>
            </div>
            <table>
                <tbody>
                    <tr>
                        <th scope="col" style={{width: "50px"}}>
                            <input id="chk" type="checkbox" name="select_all"
                                onChange={(e)=>handleAllCheck(e.target.checked)}
                                checked={checkItems.length === result.length}
                            ></input>
                            <label htmlFor="chk"></label>
                        </th>
                        <th scope="col" style={{width: "360px"}}>제목</th>
                        <th scope="col" style={{width: "120px"}}>조회수</th>
                        <th scope="col" style={{width: "180px"}}>작성일</th>
                        <th scope="col" style={{width: "120px"}}>공개 설정</th>
                    </tr>
                    {result.map((a, i)=>{
                        const date = new Date(a.date)
                        const today = date.toLocaleDateString()
                        const todayTime = today + ' ' + date.toLocaleTimeString()

                        return(
                            <tr key={i} style={{backgroundColor: `${checkItems.includes(a._id) ? "aliceblue" : "white"}`}}>
                                <td>
                                    <input id={a._id} type="checkbox" name={`select_${a._id}`}
                                        onChange={()=>handleSingleCheck(a._id)}
                                        checked={checkItems.includes(a._id)}
                                    ></input>
                                    <label htmlFor={a._id}></label>
                                </td>
                                <td>{a.title}</td>
                                <td>0</td>
                                <td>{today}</td>
                                <td>{true ? "공개" : "비공개"}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
        
    )
}