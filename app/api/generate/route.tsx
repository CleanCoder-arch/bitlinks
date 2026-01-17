import clientPromise from "@/lib/mongodb"
import { NextResponse } from "next/server"

export const runtime = "nodejs"

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const client = await clientPromise
    const db = client.db("bitlinks")
    const collection = db.collection("url")

    // Check if short URL already exists
    const doc = await collection.findOne({ shorturl: body.shorturl })

    if (doc) {
      return NextResponse.json({
        success: false,
        error: true,
        message: "URL already exists!",
      })
    }

    await collection.insertOne({
      url: body.url,
      shorturl: body.shorturl,
    })

    return NextResponse.json({
      success: true,
      error: false,
      message: "URL Generated Successfully",
    })
  } catch (error) {
    console.error("API Error:", error)

    return NextResponse.json(
      { success: false, error: true, message: "Server Error" },
      { status: 500 }
    )
  }
}
