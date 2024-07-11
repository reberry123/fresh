import { connectDB } from "@/util/database";
import bcrypt from 'bcrypt'

export default async function handler(req, res) {
    if (req.method == 'POST'){
        let db = (await connectDB).db('forum')
        
        // 에러 - 빈칸
        if (req.body.name == '' || req.body.email == '' || req.body.password == '') {
            return res.status(502).json("empty")
        }
        // 에러 - 중복 이메일
        if (await db.collection('user_cred').findOne({email: req.body.email})){
            return res.status(502).json("already registered")
        }

        let hash = await bcrypt.hash(req.body.password, 10)
        req.body.password = hash
        
        await db.collection('user_cred').insertOne(req.body)

        return res.status(200).redirect('/')
    }
}