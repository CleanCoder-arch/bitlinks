"use client"
import React, { useState } from 'react'
import Link from 'next/link'

const Shorten = () => {
  const [url, setUrl] = useState("")
  const [shorturl, setShorturl] = useState("")
  const [generated, setGenerated] = useState("")

  const generate = async () => {
    if (!url || !shorturl) {
      alert("Please fill all fields")
      return
    }

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url, shorturl }),
      })

      const result = await response.json()

      setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
      setUrl("")
      setShorturl("")
      alert(result.message)

    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className='mx-auto max-w-lg bg-linear-to-br from-purple-100 to-purple-200 my-20 p-8 rounded-2xl shadow-xl flex flex-col gap-5'>
      
      <h1 className='font-extrabold text-3xl text-purple-800 text-center'>
        Generate your URLs
      </h1>

      <input
        type="text"
        value={url}
        className='px-4 py-3 rounded-lg border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all'
        placeholder='Enter your URL'
        onChange={(e) => setUrl(e.target.value)}
      />

      <input
        type="text"
        value={shorturl}
        className='px-4 py-3 rounded-lg border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all'
        placeholder='Enter your preferred short URL text'
        onChange={(e) => setShorturl(e.target.value)}
      />

      <button
        onClick={generate}
        className='bg-purple-600 hover:bg-purple-700 active:scale-95 transition-all duration-200 rounded-lg shadow-md py-3 font-bold text-white tracking-wide'
      >
        Generate
      </button>

      {generated && (
        <div className='mt-4 bg-white rounded-lg p-4 border border-purple-300'>
          <span className='font-semibold text-purple-700 block mb-1'>
            Your Link:
          </span>
          <code className='text-purple-600 break-all'>
            <Link
              href={generated}
              target="_blank"
              className='hover:underline'
            >
              {generated}
            </Link>
          </code>
        </div>
      )}
    </div>
  )
}

export default Shorten
