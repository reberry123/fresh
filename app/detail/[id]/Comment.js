"use client"

import { useEffect, useState } from "react"
import styles from "./page.module.css"

export default function Comment(props) {
    let [comment, setComment] = useState('')
    let [data, setData] = useState([])

    useEffect(()=>{
        fetch("/api/comment/list?id=" + props.id).then((r)=>{
            if (r.status == "200"){
                return r.json()
            }
        })
        .then((result)=>{
            setData(result)
        })
    },[])

    return (
        <div>
            <hr></hr>
            {
                data.length > 0 ?
                data.map((a, i)=> {
                    return (
                        <p key={i}>{a.content}</p>
                    )
                })
                : '댓글없음'
            }
            <div className={styles.comment_area}>
                <textarea id={styles.comment} onChange={
                    (e)=>{
                        setComment(e.target.value)
                        e.target.style.height = "1px"
                        e.target.style.height = `${e.target.scrollHeight-9}px`
                    }
                }/>
                <span onClick={()=>{
                    fetch("/api/comment/new", {
                        method: "POST",
                        body: JSON.stringify({
                            content: comment,
                            parent: props.id
                        })
                    }).then((r)=> {
                        if (r.status == "200"){
                            return r.json()
                        } else {
                            alert("내용을 입력해주세요.")
                            return r.json()
                        }
                    }).then((result)=> {
                        setData(result)
                    })
                }}>등록</span>
            </div>
            
        </div>
    )
}