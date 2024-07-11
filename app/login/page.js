"use client"

import { signIn } from "next-auth/react"
import styles from "./page.module.css"
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
    const router = useRouter()
    const login = async (e) => {
        // 원래 실행되는 이벤트 취소
        e.preventDefault();
        // Form 안에서 이메일, 패스워드 가져오기
        const email = e.target.email.value;
        const password = e.target.password.value;
        const response = await signIn("email-password-credential", {
            email,
            password,
            redirect: false
        }).then((result)=> {
            if(result?.ok) {
                router.refresh()
                router.push('/')
            }
        })
    }

    return (
        <div className="container">
            <h1>로그인</h1>
            <div className={styles.login_form}>
                <h2>이메일로 로그인하기</h2>
                <div className={styles.login_area}>
                    <form onSubmit={login}>
                        <input className={styles.form_control} type="email" name="email" placeholder="이메일"></input>
                        <input className={styles.form_control} type="password" name="password" placeholder="패스워드"></input>
                        <div className={styles.login_setting}>
                            <div className={styles.checkbox}>
                                <input type="checkbox"></input>
                                <label>자동 로그인</label>
                            </div>
                            <div className={styles.checkbox}>
                                <input type="checkbox"></input>
                                <label>아이디 저장</label>
                            </div>
                        </div>
                        <button type="submit" className={styles.form_submit} >로그인</button>
                        
                        <div className={styles.account_area}>
                            <Link href="/findId">이메일 찾기</Link>
                            <span className={styles.bar}></span>
                            <Link href="/findPassword">비밀번호 찾기</Link>
                            <span className={styles.bar}></span>
                            <Link href="/register">회원가입</Link>
                        </div>
                    </form>
                </div>
            </div>
            <div className={styles.login_form}>
                <h2>소셜 로그인</h2>
                <form>
                    <button type="submit" className={styles.form_naver}>
                        <img src="03 NAVER Logo_White.png" className={styles.img}></img>
                    </button>
                </form>
            </div>
        </div>
    )
}