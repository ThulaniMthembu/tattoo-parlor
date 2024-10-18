'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen)

  const menuVariants = {
    closed: { opacity: 0, x: '-100%' },
    open: { opacity: 1, x: 0 }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl sm:text-2xl font-bold text-white">Ink Masters</Link>
        <div className="hidden md:flex space-x-4">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/services">Services</NavLink>
          <NavLink href="/gallery">Gallery</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </div>
        <button className="md:hidden text-white z-50 relative" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black flex flex-col items-center justify-center z-40"
          >
            <NavLink href="/" onClick={toggleMenu}>Home</NavLink>
            <NavLink href="/about" onClick={toggleMenu}>About</NavLink>
            <NavLink href="/services" onClick={toggleMenu}>Services</NavLink>
            <NavLink href="/gallery" onClick={toggleMenu}>Gallery</NavLink>
            <NavLink href="/contact" onClick={toggleMenu}>Contact</NavLink>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

function NavLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) {
  return (
    <Link href={href} className="text-white hover:text-gray-300 transition-colors py-2 text-lg" onClick={onClick}>
      {children}
    </Link>
  )
}