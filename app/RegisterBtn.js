import { useRouter } from "next/router"

export default function RegisterBtn() {
    const router = useRouter()

    return (
        <button 
            onClick={()=>router.push('/register')}
            style={{backgroundColor: "black", width: "120px", height: "30px", color: "white", marginRight: "20px"}}>
            회원가입
        </button>
    )
}