"use client";

import Link from "next/link";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

// Custom Button Component
const Button = ({ children, className = "", ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={`px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default function BookAppointment() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    service: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    try {
      const response = await fetch('/api/bookAppointment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        alert("Appointment booked successfully!");
        setFormData({ name: "", email: "", phone: "", date: "", time: "", service: "", message: "" });
      } else {
        alert("Failed to book appointment. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong.");
    }
  };
  

  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full h-[400px]">
        <img
          src="/17.jpg" // Replace with your image path
          alt="Book Your Appointment"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-serif mb-4">Book Your Appointment</h1>
            <p className="text-xl mb-8">Schedule your visit with our expert team today!</p>
            <Link href="#appointment-form">
              <Button className="bg-blue-600 hover:bg-blue-700">Get Started</Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Appointment Form Section */}
      <section id="appointment-form" className="container mx-auto py-16 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Form */}
          <div className="bg-teal-300 shadow-lg rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-6">Schedule Your Visit</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="date" className="block text-gray-700 mb-2">Preferred Date</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="time" className="block text-gray-700 mb-2">Preferred Time</label>
                <input
                  type="time"
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="service" className="block text-black mb-2">Select Service</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Choose a service</option>
                  <option value="cleaning">Teeth Cleaning</option>
                  <option value="whitening">Teeth Whitening</option>
                  <option value="implants">Dental Implants</option>
                  <option value="orthodontics">Orthodontics</option>
                  <option value="cosmetic">Cosmetic Dentistry</option>
                  <option value="X-Rays">Dental X-rays</option>
                  <option value="Scaling">SCaling and polishing</option>
                  <option value="Root Canal">Root Canal & Treatment</option>
                  <option value="Extraction">Extraction</option>
                  <option value="Crown & Bridges">Crown and Bridges</option>
                  <option value="Braces">Orthodontics & Bridges</option>
                  <option value="Invisible Aligners">Invisible Aligners</option> 
                  <option value="Dentures">Dentures</option>
                  <option value="veneers">Veneers</option>
                  <option value="Gum ">Gum Recession Treatment</option>
                  <option value="Surgical Procedure">Surgical Procedure</option>
                  <option value="Cosmatic Dentisry">Cosmatics Dentisry</option>
                  <option value="Tooth jewllery">Tooth Jewllery</option>
                  <option value="Smile makes Overs">Smile Makes Overs</option>
                  <option value="Dental Implants">Dental Implants</option>
                  <option value="Paediatric dentisry">Paediatric Dentisry</option>
                  <option value="Others">Others</option>
                  <option value="Others">Hydratic and Premium</option>
                
                  

          
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">Additional Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Any special requests or notes?"
                ></textarea>
              </div>
              <Button type="submit" className="w-full" >Book Appointment</Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="bg-teal-300 shadow-lg rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <MapPin size={24} className="text-blue-500" />
                <span className="text-gray-700">123 Dental Street, City, Country</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone size={24} className="text-blue-500" />
                <span className="text-gray-700">03345218215 <br />051-6166007</span>
              </div>
              <div className="flex items-center gap-4">
                <Mail size={24} className="text-blue-500" />
                <span className="text-gray-700">luminodac@gmail.com</span>
              </div>
              <div className="flex items-center gap-4">
                <Clock size={24} className="text-blue-500" />
                <span className="text-gray-700">Mon - Fri: 9 AM - 10 PM</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}