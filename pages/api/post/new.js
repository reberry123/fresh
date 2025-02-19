import { connectDB } from "@/util/database"
import { getServerSession } from "next-auth"
import { authOptions } from "../auth/[...nextauth]"

export default async function handler(req, res) {
    if (req.method == "POST") {
        if (req.body.title == '' || req.body.content == '') {
            return res.status(500).json('no title or no content')
        }

        let session = await getServerSession(req, res, authOptions)
        if (session) {
            req.body.author = session.user.email
        }

        req.body.date = Date.now()

        const db = (await connectDB).db("forum")
        let result = await db.collection("post").insertOne(req.body)
        return res.status(302).redirect('/admin/list')
    }
}