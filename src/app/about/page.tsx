"use client";

import Link from "next/link";
import { Smile, Heart, Shield } from "lucide-react";

// Custom Button Component
const Button = ({ children, className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={`px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section for About Page */}
      <div className="relative w-full h-[400px]">
        <img
          src="/10.jpg" // Replace with your hero image
          alt="About Lumino Dental"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">About Lumino Dental</h1>
            <p className="text-xl">Your Smile, Our Passion</p>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <section className="container mx-auto bg-teal-100 py-16 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="/11.jpg" // Replace with your intro image
              alt="Lumino Dental Team"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Welcome to Lumino Dental & Aesthetic Clinic</h2>
            <p className="text-gray-600 mb-4">
              At Lumino Dental, we believe that a healthy smile is the foundation of confidence and well-being. Our clinic is dedicated to providing exceptional dental and aesthetic care in a warm, welcoming environment.
            </p>
            <p className="text-gray-600 mb-4">
              With a team of highly skilled professionals and state-of-the-art technology, we offer a comprehensive range of services tailored to meet your unique needs. Whether you are looking for routine dental care or advanced aesthetic treatments, we are here to help you achieve your goals.
            </p>
            <Link href="/services">
              <Button>Explore Our Services</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Our Mission and Values Section */}
      <section className="bg-teal-200 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Mission & Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission Card */}
            <div className="bg-teal-200 p-8 rounded-lg shadow-lg text-center">
              <Smile size={48} className="text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To provide exceptional dental and aesthetic care that enhances our patients, health, confidence, and quality of life.
              </p>
            </div>
            {/* Values Card */}
            <div className="bg-teal-200 p-8 rounded-lg shadow-lg text-center">
              <Heart size={48} className="text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Our Values</h3>
              <p className="text-gray-600">
                We are committed to compassion, integrity, and excellence in everything we do.
              </p>
            </div>
            {/* Vision Card */}
            <div className="bg-teal-200 p-8 rounded-lg shadow-lg text-center">
              <Shield size={48} className="text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the leading dental and aesthetic clinic, trusted by our community for outstanding care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="container mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Team Member 1 */}
          <div className="bg-teal-400 rounded-lg shadow-lg overflow-hidden">
            <img
              src="/abc.jpg" // Replace with team member image
              alt="Dr. Muhammad Samama"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Dr. Muhammad Samama 
              </h3>
              <p className="text-gray-600 mb-4">BDS (UHS) <br /> RDS
C-Restorative & Endodontist 
<br />
Cosmetic Dental Surgeon
<br />
C-Orthodontist</p>
            </div>
          </div>
          {/* Team Member 2 */}
          <div className="bg-teal-200 rounded-lg shadow-lg overflow-hidden">
            <img
              src="/team2.jpg" // Replace with team member image
              alt="Dr. Jane Smith"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Dr. Jane Smith</h3>
              <p className="text-gray-600 mb-4">Aesthetic Specialist</p>
              <p className="text-gray-600">
                Dr. Jane is passionate about helping patients achieve their dream smiles through advanced aesthetic treatments.
              </p>
            </div>
          </div>
          {/* Team Member 3 */}
          <div className="bg-teal-400 rounded-lg shadow-lg overflow-hidden">
            <img
              src="/team3.jpg" // Replace with team member image
              alt="Dr. Emily Brown"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Dr. Emily Brown</h3>
              <p className="text-gray-600 mb-4">Orthodontist</p>
              <p className="text-gray-600">
                Dr. Emily is an expert in orthodontics, providing personalized care for patients of all ages.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-teal-100 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Lumino Dental?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Reason 1 */}
            <div className="text-center">
              <img
                src="/12.jpg" // Replace with icon image
                alt="Advanced Technology"
                className="w-16 h-16 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Advanced Technology</h3>
              <p className="text-gray-600">
                We use the latest dental and aesthetic technology to ensure precise and effective treatments.
              </p>
            </div>
            {/* Reason 2 */}
            <div className="text-center">
              <img
                src="/13.jpg" // Replace with icon image
                alt="Experienced Team"
                className="w-16 h-16 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Experienced Team</h3>
              <p className="text-gray-600">
                Our team of specialists has years of experience and a passion for patient care.
              </p>
            </div>
            {/* Reason 3 */}
            <div className="text-center">
              <img
                src="/14.jpg" // Replace with icon image
                alt="Personalized Care"
                className="w-16 h-16 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Personalized Care</h3>
              <p className="text-gray-600">
                We tailor our treatments to meet the unique needs and goals of each patient.
              </p>
            </div>
            {/* Reason 4 */}
            <div className="text-center">
              <img
                src="/15.jpg" // Replace with icon image
                alt="Comfortable Environment"
                className="w-16 h-16 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Comfortable Environment</h3>
              <p className="text-gray-600">
                Our clinic is designed to provide a relaxing and stress-free experience for our patients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-teal-500 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Smile?</h2>
          <p className="text-xl text-white mb-8">
            Book your appointment today and experience the Lumino Dental difference.
          </p>
          <Link href="/book-appointment">
            <Button className="bg-white text-black hover:bg-blue-400">
              Book Your Appointment
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}