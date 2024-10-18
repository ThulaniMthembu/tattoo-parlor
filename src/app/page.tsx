'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

const heroContent = [
  {
    image: '/hero1.jpg',
    text: 'Welcome to Ink Masters',
    color: 'text-red-500'
  },
  {
    image: '/hero2.jpg',
    text: 'Unleash Your Creativity',
    color: 'text-blue-500'
  },
  {
    image: '/hero3.jpg',
    text: 'Art on Your Skin',
    color: 'text-green-500'
  }
]

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroContent.length)
    }, 7000)

    return () => clearInterval(interval)
  }, [])

  return (
    <main className="min-h-screen pt-0">
      <div className="relative h-[calc(100vh-48px)]">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <div
              className="h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${heroContent[currentIndex].image})` }}
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center px-4">
            <AnimatePresence mode="wait">
              <motion.h1
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className={`text-3xl sm:text-4xl md:text-6xl font-bold mb-4 ${heroContent[currentIndex].color}`}
              >
                {heroContent[currentIndex].text}
              </motion.h1>
            </AnimatePresence>
            <p className="text-white text-lg sm:text-xl md:text-2xl mb-6">Experience the art of tattooing in Johannesburg</p>
            <p className="text-white text-base sm:text-lg md:text-xl mb-8">Where creativity meets skin - your body, our canvas</p>
            <Link
              href="/contact"
              className="bg-white text-black px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition-colors inline-block"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}