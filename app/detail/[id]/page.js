import { ObjectId } from "mongodb"
import Comment from "./Comment"
import { connectDB } from "@/util/database"

export default async function Detail(props) {
    const db = (await connectDB).db('forum')
    let result = await db.collection('post').findOne({
        _id: new ObjectId(props.params.id)
    })

    return(
        <div className="detail">
            <h1>{result.header == "none" ? result.title : "[" + result.header + "] " + result.title}</h1>
            <div>유저정보보여주는부분</div>
            <hr></hr>
            <p>{result.content}</p>
            <Comment id={props.params.id}/>
        </div>
    )
}