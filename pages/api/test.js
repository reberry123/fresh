import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"

export default async function handler(req, res) {
    const db = (await connectDB).db("forum")
    let result = await db.collection("post").find().toArray()
    let today = new Date()
    
    if (req.method == 'GET') {
        return res.status(200).json(today.getHours() + "시 " + today.getMinutes() + "분 " + today.getSeconds() + "초")
    }
    if (req.method == 'POST') {
        return res.status(200).json('처리 완료')
    }
}