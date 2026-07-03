import { MongoClient } from 'mongodb'

const uri =
  process.env.MONGODB_URI ??
  process.env.NEXT_PUBLIC_DB_URL ??
  'mongodb://localhost:27017'

const clientPromise = MongoClient.connect(uri, {
  maxPoolSize: 10,
})

export default clientPromise
