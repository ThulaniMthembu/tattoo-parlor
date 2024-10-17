import Link from 'next/link'
import { Facebook, Instagram, Twitter, Clock, MapPin, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Ink Masters</h3>
            <div className="flex items-center text-sm">
              <MapPin size={16} className="mr-2" />
              <span>123 Tattoo Street, Johannesburg, SA</span>
            </div>
          </div>
          <div className="mb-6 md:mb-0">
            <div className="flex items-center text-sm mb-2">
              <Clock size={16} className="mr-2" />
              <span>Mon-Fri: 10AM-8PM | Sat: 11AM-6PM</span>
            </div>
            <div className="flex items-center text-sm">
              <Phone size={16} className="mr-2" />
              <span>+27 11 123 4567</span>
            </div>
          </div>
          <div className="flex space-x-4">
            <SocialLink href="https://facebook.com" icon={<Facebook size={20} />} />
            <SocialLink href="https://instagram.com" icon={<Instagram size={20} />} />
            <SocialLink href="https://twitter.com" icon={<Twitter size={20} />} />
          </div>
        </div>
        <div className="mt-8 pt-4 border-t border-gray-800 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Ink Masters. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <Link 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="text-white hover:text-gray-300 transition-colors"
    >
      {icon}
    </Link>
  )
}