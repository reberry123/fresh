import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"
import { getServerSession } from "next-auth"
import { authOptions } from "../auth/[...nextauth]"

export default async function handler(req, res) {
    if (req.method == "DELETE") {
        let session = await getServerSession(req, res, authOptions)
        if (session){
            const db = (await connectDB).db("forum")
            let document = await db.collection("post").findOne({_id: new ObjectId(req.body)})

            if (session.user.role == 'admin' || session.user.email == document.author) {
                let result = await db.collection("post").deleteOne({_id: new ObjectId(req.body)})
                return res.status(200).json("삭제완료")
            }

            return res.status(403).json("삭제불가")
        }
        return res.status(401).json("로그인 되어있지 않음")
    }
}