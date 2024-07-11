import { connectDB } from "@/util/database"
import { getServerSession } from "next-auth"
import { authOptions } from "../auth/[...nextauth]"
import { ObjectId } from "mongodb"

export default async function handler(req, res) {
    if (req.method == "POST") {
        let comment = JSON.parse(req.body)
        if (comment.content == '') {
            return res.status(500).json([])
        }

        let session = await getServerSession(req, res, authOptions)
        if (session){
            let newComment = {
                content: comment.content,
                author: session.user.email,
                parent: new ObjectId(comment.parent)
            }

            const db = (await connectDB).db("forum")
            let document = await db.collection("comments").insertOne(newComment)

            let result = await db.collection("comments").find({parent: new ObjectId(comment.parent)}).toArray()
            if (result) {
                return res.status(200).json(result)
            }
        }
        return res.status(401).json("로그인 되어있지 않음")
    }
}