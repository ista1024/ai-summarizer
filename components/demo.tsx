"use client";
import { useEffect, useState } from "react"
import Image from "next/image"
// import {} from '@/'


const Demo = () => {
  const [article, setArticle] = useState({
    url: '',
    summary: ''
  })

  const handleSubmit = () => {
    alert('Submitted')

  }

  return (
    <section className="mt-16 w-full max-w-xl">
      <div className="flex flex-col w-full gap-2">
        <form className="relative flex justify-center items-center"
          onSubmit={handleSubmit}>
          <Image
            className="absolute left-0 my-2 ml-3 w-5"
            src="/link.svg"
            alt="link_icon"
            width={28}
            height={37}
            priority
          />
          <input
            className="url_input peer"
            type="url"
            placeholder="Enter a URL"
            value={article?.url || ''}
            onChange={(e) => setArticle({ ...article, url: e.target.value || '' })}
            required
          />
          <button
            type="submit"
            className="submit_btn
             peer-focus:border-gray-700
             peer-focus:text-gray-700"
          >
            🔎
          </button>
        </form>
        {/* Browse URL History */}
      </div>
      {/* Display Result */}
    </section>
  )
}

export default Demo
