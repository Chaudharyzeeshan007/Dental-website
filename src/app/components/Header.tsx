import Link from 'next/link';
import React, { useState } from 'react';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div>
      <header className="bg-teal-200 shadow-md sticky top-0 w-full z-50">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/1.png"
              alt="Dental Clinic Logo"
              className="w-20 h-12 object-contain"
            />
            <span className="text-2xl font-bold text-teal-950">
              Lumino Dental and Aesthetics Clinic
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 items-center">
            <Link
              href="/"
              className="text-gray-700 hover:text-teal-500 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-teal-500 transition-colors"
            >
              About
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className="flex items-center text-gray-700 hover:text-teal-500 transition-colors focus:outline-none">
                Services <ChevronDown size={20} className="ml-1" />
              </button>

              {isDropdownOpen && (
                <div className="absolute left-0 mt-2 w-[600px] bg-teal-100 shadow-lg rounded-lg border border-gray-200 p-4 flex gap-6">
                  {/* Column 1: Dental Services */}
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800 mb-3 border-b pb-2">
                      Our Dental Services
                    </h4>
                    <div className="grid grid-cols-1 gap-2">
                      {[
                        'Dental X-rays',
                        'Teeth Cleaning',
                        'Scaling and Polishing',
                        'Teeth Whitening',
                        'Root Canal Treatment',
                        'Extractions',
                        'Crown & Bridges',
                        'Orthodontics/Braces',
                        'Invisible Aligners',
                        'Dentures',
                        'Veneers',
                        'Gum Recession Treatment',
                        'Surgical Procedures',
                        'Cosmetic Dentistry',
                        'Tooth Jewellery',
                        'Smile Makeovers',
                        'Dental Implants',
                        'Paediatric Dentistry',
                        'Others',
                      ].map((service, index) => (
                        <Link
                          key={index}
                          href={`/services/${service.toLowerCase().replace(/ /g, '-')}`}
                          className="text-gray-600 hover:text-teal-800 transition-colors"
                        >
                          {service}
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Column 2: Aesthetic Services */}
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800 mb-3 border-b pb-2">
                      Our Aesthetic Services
                    </h4>
                    <div className="grid grid-cols-1 gap-2">
                      {[
                        'Hydrafacial (Basic & Premium)',
                        'PRP Hair Treatment',
                        'PRP Face Treatment',
                        'Microneedling',
                        'Mesotherapy (Face & Undereyes)',
                        'Exosomes',
                        'Hair Loss Treatment',
                        'Skin Rejuvenation',
                        'Chemical Peels',
                        'Botox',
                        'Fillers',
                        'Thread Facelift',
                        'Fat Burning Injections',
                        'Skin Boosters',
                        'Profhilo',
                        'Mole Removal',
                        'Combination Treatments',
                      ].map((service, index) => (
                        <Link
                          key={index}
                          href={`/services/${service.toLowerCase().replace(/ /g, '-')}`}
                          className="text-gray-600 hover:text-teal-800 transition-colors"
                        >
                          {service}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/contact"
              className="text-gray-700 hover:text-teal-500 transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Contact & CTA Button */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center gap-2 text-gray-700">
              <Phone size={20} className="text-teal-500" />
              <span>
                03345218215 <br />
                051-6166007
              </span>
            </div>
            <Link
              href="/book-appointment"
              className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600 transition-colors"
            >
              Book Your Appointment
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700 hover:text-teal-500 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden bg-teal-200 border-t shadow-md">
            <Link
              href="/"
              className="block px-6 py-3 text-gray-700 hover:bg-teal-100 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block px-6 py-3 text-gray-700 hover:bg-teal-100 transition-colors"
            >
              About
            </Link>

            {/* Services Dropdown in Mobile */}
            <div className="relative">
              <button
                className="w-full text-left px-6 py-3 text-gray-700 hover:bg-teal-100 flex justify-between items-center transition-colors"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                Services <ChevronDown size={20} />
              </button>
              {isDropdownOpen && (
                <div className="bg-white shadow-md border">
                  {[
                    'Dental X-rays',
                    'Teeth Cleaning',
                    'Scaling and Polishing',
                    'Teeth Whitening',
                    'Root Canal Treatment',
                    'Extractions',
                    'Crown & Bridges',
                    'Orthodontics/Braces',
                    'Invisible Aligners',
                    'Dentures',
                    'Veneers',
                    'Gum Recession Treatment',
                    'Surgical Procedures',
                    'Cosmetic Dentistry',
                    'Tooth Jewellery',
                    'Smile Makeovers',
                    'Dental Implants',
                    'Paediatric Dentistry',
                    'Others',
                  ].map((service, index) => (
                    <Link
                      key={index}
                      href={`/services/${service.toLowerCase().replace(/ /g, '-')}`}
                      className="block px-6 py-3 text-gray-700 hover:bg-teal-100 transition-colors"
                    >
                      {service}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/contact"
              className="block px-6 py-3 text-gray-700 hover:bg-teal-100 transition-colors"
            >
              Contact
            </Link>
            <div className="flex flex-col items-center py-3 space-y-3">
              <div className="flex items-center gap-2 text-gray-700">
                <Phone size={20} className="text-teal-500" />
                <span>
                  03345218215 <br />
                  051-6166007
                </span>
              </div>
              <Link
                href="/book-appointment"
                className="w-3/4 bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600 transition-colors text-center"
              >
                Book Your Appointment
              </Link>
            </div>
          </nav>
        )}
      </header>
    </div>
  );
}

export default Header;