"use client";

import Image from 'next/image'
import Demo from '@/components/demo'
import Hero from '@/components/hero'

export default function Home() {
  return (
    <main>
      <div className="main">
        <div className="gradient" />
      </div>
      <div className="app">
        <Hero />
        <Demo />
      </div>
    </main>
  )
}
