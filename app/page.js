import { connectDB } from "@/util/database"
import MainReport from "./MainReport";

export const dynamic = 'force-dynamic'

export default async function Home() {
    const client = await connectDB;
    const db = client.db("forum")
    let result = await db.collection("post").find().toArray()
        return (
            <div>
                
                <div className="container">
                    <div className="weekly_report">
                        <MainReport></MainReport>
                    </div>
                    <div className="main_banner" style={{height: "2000px"}}>
                        
                    </div>
                    <div className="trend">

                    </div>
                    <div className="subscribtion">

                    </div>
                </div>
                
            </div>
            
        )
    }