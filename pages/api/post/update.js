import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"

export default async function handler(req, res) {
    if (req.method == "POST") {
        if (req.body.title == '' || req.body.content == '') {
            return res.status(500).json('no title or no content')
        }

        console.log(req.body)
        let newContent = {
            title: req.body.title,
            content: req.body.content
        }

        const db = (await connectDB).db("forum")
        let result = await db.collection("post").updateOne({_id: new ObjectId(req.body._id)},
            {$set: newContent })
        return res.status(302).redirect('/')
    }
}