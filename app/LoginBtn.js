'use client'

import {signIn} from 'next-auth/react'

export default function LoginBtn() {
    return (
        <span style={{margin: "auto"}} onClick={()=>{signIn()}}>로그인</span>
    )
}