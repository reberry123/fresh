import { connectDB } from "@/util/database";

export default async function handler(req, res) {
    if (req.method == 'POST'){
        let db = (await connectDB).db('forum')
        
        // 이메일 찾기
        if (req.body.type == 'email') {
            let document = await db.collection("user_cred").findOne({name: req.body.name})
            
            if (document == null) {
                return res.status(403).json("해당 사용자는 존재하지 않습니다.")
            }
            return res.status(200).json(document.email)
        }

        // 비밀번호 찾기
        if (req.body.type == 'password') {
            let document = await db.collection("user_cred").findOne({email: req.body.email})
            if (document == null) {
                return res.status(403).json("해당 이메일이 존재하지 않습니다.")
            }
            
            return res.status(200).json(document.password)
        }
    }
}