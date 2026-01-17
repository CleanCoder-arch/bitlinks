import clientPromise from "@/lib/mongodb"
import { NextResponse } from "next/server"

export const runtime = "nodejs"

interface UrlPayload {
  url: string
  shorturl: string
}

export async function POST(request: Request) {
  try {
    const body: UrlPayload = await request.json()

    if (!body.url || !body.shorturl) {
      return NextResponse.json(
        { success: false, error: true, message: "Missing fields" },
        { status: 400 }
      )
    }

    const client = await clientPromise
    const db = client.db("bitlinks")
    const collection = db.collection("url")

    const shorturl = body.shorturl.toLowerCase()

    const doc = await collection.findOne({ shorturl })
    if (doc) {
      return NextResponse.json({
        success: false,
        error: true,
        message: "URL already exists!",
      })
    }

    await collection.insertOne({
      url: body.url,
      shorturl,
      createdAt: new Date(),
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
