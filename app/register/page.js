'use client'

import { useState } from "react"
import styles from "./page.module.css"

export default function Register() {
    let [password, setPassword] = useState('')
    let [isChange, setChange] = useState(false)
    let [isEqual, setEqual] = useState(false)

    return (
        <div className="container">
            <h1>회원가입</h1>
            <div className={styles.signup_form}>
                <h2>이메일로 가입하기</h2>
                <form action="/api/auth/signup" method="POST">
                    <input className={styles.form_control} type="text" name="name" placeholder="이름"></input>
                    <input className={styles.form_control} type="email" name="email" placeholder="이메일"></input>
                    <input className={styles.form_control} type="password" name="password" placeholder="비밀번호" onChange={(e)=>{
                        setPassword(e.target.value)
                    }}></input>
                    <input className={styles.form_control} type="password" placeholder="비밀번호 확인" onChange={(e)=>{
                        if (password == e.target.value) {
                            setEqual(true)
                        }
                        else {
                            setEqual(false)
                        }
                        if (e.target.value == "") {
                            setChange(false)
                        }
                        else {
                            setChange(true)
                        }
                    }}></input>
                    {isChange ? isEqual ? <h4 style={{color: "green"}}>비밀번호가 일치합니다.</h4> : <h4 style={{color: "red"}}>비밀번호가 일치하지 않습니다.</h4> : null}
                    
                    <input name="role" type="text" defaultValue={'normal'} style={{display:'none'}}></input>
                    <button type="submit" className={styles.form_submit} >회원가입</button>
                </form>
            </div>
        </div>
        // <div className="register-wrap">
        //     <form action="/api/auth/signup" method="POST">
        //         <input name="name" type="text" placeholder="이름"></input>
        //         <input name="email" type="text" placeholder="이메일"></input>
        //         <input name="password" type="password" placeholder="비밀번호" hidden></input>
        //         <input name="role" type="text" defaultValue={'normal'} style={{display:'none'}}></input>
        //         <button type="submit">회원가입</button>
        //     </form>
        // </div>
    )
}