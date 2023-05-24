"use client";
import Image from "next/image"

const Hero = () => {
  return (
    <header className="w-full flex jusify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <Image
          className="w-28 object-contain"
          src="/logo.svg"
          alt="sumz_logo"
          width={28}
          height={37}
          priority
        />
        <button
          type="button"
          onClick={() => window.open("https://github.com/ista1024")}
          className="black_btn"
        >
          Github
        </button>
      </nav>
      <h1 className="head_text">
        Summarize Articles with
        <br className="max-md:hedden" />
        <span className="orange_gradient">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        Simplify your reading with Summize, an open-source article summarizer
        that transforms lengthy articles into clear and concise summaries
      </h2>
    </header>
  )
}

export default Hero
