"use client"

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useOutsideClick } from './useOutsideClick'
import { signIn, signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export default function({session}) {
    const [isOpen, setOpen] = useState(false)
    const router = useRouter()
    const dropRef = useOutsideClick(() => {
      setOpen(false)
    })

    return(
        <div className='navbar'>
          <div className='logo_area'>
            Goodzvil
          </div>
          <div className='menu_wrap'>
            <div className='menu_left'>
              <ul className='menu_list'>
                <li className='library'> <Link href={'/library'}>굿즈 라이브러리</Link> </li>
                <li className='report'> <Link href={'/report'}>굿즈 리포트</Link> </li>
                <li className='trending'> <Link href={'/trending'}>굿즈 트렌딩</Link> </li>
              </ul>
            </div>
            <div className='menu_right'>
            {session == null ? 
              <div className='menu_right'>
                <div className='login_btn'>
                  <button 
                    onClick={()=>signIn()}
                    style={{backgroundColor: "white", border: "none", width: "120px", height: "30px", marginRight: "20px"}}>
                    로그인
                  </button>
                </div>
                <button 
                    onClick={()=>router.push('/register')}
                    style={{backgroundColor: "black", width: "120px", height: "30px", color: "white", marginRight: "20px"}}>
                    회원가입
                </button>
              </div>
              :
              <div className='menu_right'>
                <span className='user_pfp' onClick={()=>{setOpen(!isOpen)}}></span>
                
                <h4 style={{userSelect: "none", margin: "auto"}}>{session.user.name}</h4>
                <div className={isOpen ? "dropdown active" : "dropdown"} ref={dropRef}>
                  <ul className="drop_menu">
                      <li>마이페이지</li>
                      {session.user.role == 'admin' ?
                        <li>
                          <Link href="/admin">관리자 페이지</Link>
                        </li> : null}
                      <li style={{margin: "0"}}>
                        <span onClick={()=>{signOut()}} style={{color: "white"}}>로그아웃</span>
                      </li>
                  </ul>
                </div>
              </div>}
            </div>
          </div>
        </div>
    )  
}