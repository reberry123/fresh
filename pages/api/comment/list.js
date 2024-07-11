import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"

export default async function handler(req, res) {
    const db = (await connectDB).db("forum")
    let result = await db.collection("comments").find({parent: new ObjectId(req.query.id)}).toArray()
    
    if (result) {
        return res.status(200).json(result)
    }
    return res.status(500).json("댓글없는듯?")
}