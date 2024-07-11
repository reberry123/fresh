import { MongoClient } from 'mongodb'
const url = 'mongodb+srv://reberry0104:iplaytowin1@cluster0.0gkdtsk.mongodb.net/'
const options = { useNewUrlParser: true }
let connectDB

if (process.env.NODE_ENV === 'development') {
  if (!global._mongo) {
    global._mongo = new MongoClient(url, options).connect()
  }
  connectDB = global._mongo
} else {
  connectDB = new MongoClient(url, options).connect()
}
export { connectDB }