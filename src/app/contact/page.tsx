'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import  { MapPin, Phone, Mail, User } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevData => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setFormData({ name: '', email: '', phone: '', message: '' })
    alert('Thank you for your message. We will get back to you soon!')
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center">Contact Us</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <motion.div 
          className="md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="mb-6 text-sm sm:text-base">We'd love to hear from you. Feel free to reach out with any questions or to schedule an appointment.</p>
          <div className="space-y-4">
            <div className="flex items-center">
              <MapPin className="mr-4 text-gray-600 flex-shrink-0" />
              <p className="text-sm sm:text-base">123 Tattoo Street, Johannesburg, South Africa</p>
            </div>
            <div className="flex items-center">
              <User className="mr-4 text-gray-600 flex-shrink-0" />
              <p className="text-sm sm:text-base">Contact Person: John Doe</p>
            </div>
            <div className="flex items-center">
              <Phone className="mr-4 text-gray-600 flex-shrink-0" />
              <p className="text-sm sm:text-base">+27 11 123 4567</p>
            </div>
            <div className="flex items-center">
              <Mail className="mr-4 text-gray-600 flex-shrink-0" />
              <p className="text-sm sm:text-base">info@inkmasters.com</p>
            </div>
          </div>
        </motion.div>
        <motion.div 
          className="md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-2 font-semibold text-sm sm:text-base">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black text-sm sm:text-base"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 font-semibold text-sm sm:text-base">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black text-sm sm:text-base"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block mb-2 font-semibold text-sm sm:text-base">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black text-sm sm:text-base"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 font-semibold text-sm sm:text-base">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black text-sm sm:text-base"
              ></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  )
}