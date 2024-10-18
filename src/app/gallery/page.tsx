'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

const galleryImages = [
  { src: '/gallery1.jpg', alt: 'Tattoo 1' },
  { src: '/gallery2.jpg', alt: 'Tattoo 2' },
  { src: '/gallery3.jpg', alt: 'Tattoo 3' },
  { src: '/gallery4.jpg', alt: 'Tattoo 4' },
  { src: '/gallery5.jpg', alt: 'Tattoo 5' },
  { src: '/gallery6.jpg', alt: 'Tattoo 6' },
  { src: '/gallery7.jpg', alt: 'Tattoo 7' },
  { src: '/gallery8.jpg', alt: 'Tattoo 8' },
  { src: '/gallery9.jpg', alt: 'Tattoo 9' },
]

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-center">Our Gallery</h1>
      <p className="text-lg sm:text-xl text-center mb-8">Discover our portfolio of stunning tattoo artworks</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {galleryImages.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="cursor-pointer"
            onClick={() => setSelectedImage(image.src)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={400}
              height={400}
              className="rounded-lg shadow-lg object-cover w-full h-64"
            />
          </motion.div>
        ))}
      </div>
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-full max-h-full"
            >
              <Image
                src={selectedImage}
                alt="Selected tattoo"
                width={800}
                height={800}
                className="max-w-full max-h-[90vh] object-contain"
              />
              <button
                className="absolute top-2 right-2 text-white hover:text-gray-300 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(null);
                }}
              >
                <X size={24} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}