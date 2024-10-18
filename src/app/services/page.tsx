'use client'

import { motion } from 'framer-motion'

const services = [
  {
    title: 'Custom Designs',
    description: 'Bring your ideas to life with our custom tattoo design service.',
    price: 'From R1500',
    image: '/custom-design.jpg'
  },
  {
    title: 'Cover-Ups',
    description: 'Transform old or unwanted tattoos into stunning new pieces.',
    price: 'From R2000',
    image: '/cover-up.jpg'
  },
  {
    title: 'Traditional',
    description: 'Classic tattoo designs with bold lines and vibrant colors.',
    price: 'From R1200',
    image: '/traditional.jpg'
  },
  {
    title: 'Realism',
    description: 'Lifelike tattoos that capture every detail with precision.',
    price: 'From R2500',
    image: '/realism.jpg'
  },
  {
    title: 'Watercolor',
    description: 'Soft, dreamy tattoos inspired by watercolor paintings.',
    price: 'From R1800',
    image: '/watercolor.jpg'
  },
  {
    title: 'Blackwork',
    description: 'Bold, graphic designs using solid black ink.',
    price: 'From R1500',
    image: '/blackwork.jpg'
  }
]

export default function Services() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-center">Our Services</h1>
      <p className="text-lg sm:text-xl text-center mb-8">Explore our range of tattoo styles and services</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="relative overflow-hidden rounded-lg shadow-lg h-64"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${service.image})` }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity hover:bg-opacity-75">
              <div className="h-full flex flex-col justify-end p-4 sm:p-6">
                <h3 className="text-white text-xl sm:text-2xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-300 text-sm sm:text-base mb-2">{service.description}</p>
                <p className="text-white font-semibold">{service.price}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}