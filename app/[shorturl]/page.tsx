import { redirect } from "next/navigation"
import clientPromise from "@/lib/mongodb"

export default async function Page({
  params,
}: {
  params: Promise<{ shorturl: string }>
}) {
  const { shorturl } = await params
  const client = await clientPromise
  const db = client.db("bitlinks")
  const collection = db.collection("url")

  const doc = await collection.findOne({ shorturl: shorturl })
  if (doc) {
    redirect(doc.url)
  } else {
    redirect(`${process.env.NEXT_PUBLIC_HOST}`)
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md sm:max-w-lg bg-white shadow-xl rounded-2xl p-6 sm:p-8 text-center">
        <h1 className="text-xl sm:text-2xl font-bold text-purple-700 mb-2">
          Redirecting…
        </h1>
        <p className="text-sm sm:text-base text-gray-600 break-all">
          My Post: {"url"}
        </p>
      </div>
    </div>
  )
}
