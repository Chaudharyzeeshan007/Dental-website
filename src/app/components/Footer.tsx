
import { Mail, MapPin, Phone } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <div>
      <footer className="bg-teal-950 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Lumino Dental and Aesthetics Clinic</h3>
              <p className="text-gray-300">Your smile is our priority. We provide the best dental care services to ensure your oral health and well-being.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/" className="text-gray-300 hover:text-blue-500">Home</Link></li>
                <li><Link href="/about" className="text-gray-300 hover:text-blue-500">About</Link></li>
                <li><Link href="/services" className="text-gray-300 hover:text-blue-500">Services</Link></li>
                <li><Link href="/contact" className="text-gray-300 hover:text-blue-500">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Info</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <MapPin size={20} className="text-blue-500" />
                  <span className="text-gray-300">F-8 Markaz, Islamabad, Pakistan</span>
                </li>
                <li className="flex items-center cursor-pointer gap-2">
                    <a href="https://wa.me/923345218215">
                  <Phone size={20} className="text-blue-500" />
                  <span className="text-gray-300">03345218215 <br />051-6166007</span>
                    </a>
                </li>
                <li className="flex cursor-pointer items-center gap-2">
                    <a href="mailto:luminodac@gmail.com">

                  <Mail size={20} className="text-blue-500" />
                  <span className="text-gray-300">luminodac@gmail.com</span>
                    </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-300">&copy; 2023 DentalCare. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
