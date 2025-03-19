"use client";

import Link from "next/link";
// import Header from "./components/Header";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
// Custom Button Component
const Button = ({ children, className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={`px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default function Home() {
  
  return (
    <>
      {/* Header */}

      {/* Hero Section */}
      <div className="relative w-full h-[400px]">
        <img
          src="/2.jpg" // Replace with your image path
          alt="Hero Image"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-serif mb-4">Welcome to LUMINO</h1>
            <h4 className="text-xl font-mono mb-4">Dental & Aesthetics Clinic</h4>
            <p className="text-xl mb-8">Yours smile is our priority</p>
            <Link href="/book-appointment">
              <Button className="bg-blue-600 hover:bg-blue-700">Book Your Appointment</Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className="container mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-teal-400 shadow-lg rounded-lg p-6">
            <img src="/3.jpg" alt="Service 1" className="w-full h-48 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-semibold mb-2">Teeth Cleaning</h3>
            <p className="text-grey-600">Professional teeth cleaning to maintain oral health and hygiene.</p>
          </div>
          <div className="bg-teal-400 shadow-lg rounded-lg p-6">
            <img src="/4.jpg" alt="Service 2" className="w-full h-48 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-semibold mb-2">Teeth Whitening</h3>
            <p className="text-gray-600">Brighten your smile with our advanced teeth whitening treatments.</p>
          </div>
          <div className="bg-teal-400 shadow-lg rounded-lg p-6">
            <img src="/5.jpg" alt="Service 2" className="w-full h-48 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-semibold mb-2">Scaling & Polishing</h3>
            <p className="text-gray-600">Brighten your smile with our advanced teeth whitening treatments.</p>
          </div>
          <div className="bg-teal-400 shadow-lg rounded-lg p-6">
            <img src="/6.jpg" alt="Service 3" className="w-full h-48 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-semibold mb-2">Dental Implants</h3>
            <p className="text-gray-600">Restore your smile with durable and natural-looking dental implants.</p>
          </div>
          <div className="bg-teal-400 shadow-lg rounded-lg p-6">
            <img src="/7.jpg" alt="Service 3" className="w-full h-48 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-semibold mb-2">Root canal treatments</h3>
            <p className="text-gray-600">Restore your smile with durable and natural-looking dental implants.</p>
          </div>
          <div className="bg-teal-400 shadow-lg rounded-lg p-6">
            <img src="/8.jpg" alt="Service 3" className="w-full h-48 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-semibold mb-2">Invisible aligners</h3>
            <p className="text-gray-600">Restore your smile with durable and natural-looking dental implants.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-teal-400 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <img src="/9.jpg" alt="About Us" className="w-full h-96 object-cover rounded-md" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Why Choose DentalCare?</h3>
              <p className="text-gray-600 mb-4">
                At DentalCare, we are committed to providing the highest quality dental care in a comfortable and welcoming environment. Our team of experienced professionals uses the latest technology to ensure your dental health is in the best hands.
              </p>
              <p className="text-gray-600 mb-4">
                We offer a wide range of services, from routine cleanings to advanced cosmetic procedures, all tailored to meet your individual needs. Your smile is our priority, and we strive to make every visit a positive experience.
              </p>
              <Link href="/about">
                <Button>Learn More</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <form className="bg-teal-200 shadow-lg rounded-lg p-6">
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
                <input type="text" id="name" className="w-full px-4 py-2 border rounded-md" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                <input type="email" id="email" className="w-full px-4 py-2 border rounded-md" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
                <textarea id="message" className="w-full px-4 py-2 border rounded-md" rows={4}></textarea>
              </div>
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
          </div>
          <div className="bg-teal-200 shadow-lg rounded-lg p-6">
            <div className="flex items-center gap-4 mb-6">
              <MapPin size={24} className="text-blue-500" />
              <span className="text-gray-700">123 Dental Street, City, Country</span>
            </div>
            <div className="flex items-center gap-4 mb-6">
              <Phone size={24} className="text-blue-500" />
              <span className="text-gray-700">03345218215 <br />051-6166007</span>
            </div>
            <div className="flex items-center gap-4 mb-6">
              <Mail size={24} className="text-blue-500" />
              <span className="text-gray-700">luminodac@gmail.com</span>
            </div>
            <div className="flex items-center gap-4">
              <Clock size={24} className="text-blue-500" />
              <span className="text-gray-700">Mon - Fri: 9 AM - 10 PM</span>
            </div>
          </div>
        </div>
      </section>

      {/* <BookAppointment/> */}
      
    </>
  );
}