// lib/mongodb.ts

import { MongoClient, MongoClientOptions } from 'mongodb'

const uri: string = process.env.MONGODB_URI as string

const options: MongoClientOptions = {
  // useNewUrlParser is no longer required in newer MongoDB drivers,
  // but kept here for compatibility
}

let client: MongoClient
let clientPromise: Promise<MongoClient>

// Ensure MongoDB URI is defined
if (!process.env.MONGODB_URI) {
  throw new Error('Add Mongo URI to .env.local')
}

declare global {
  // Allow global variable in development
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined
}

if (process.env.NODE_ENV === 'development') {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options)
    global._mongoClientPromise = client.connect()
  }
  clientPromise = global._mongoClientPromise
} else {
  client = new MongoClient(uri, options)
  clientPromise = client.connect()
}

export default clientPromise
