import React from 'react';

const ContactUsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <section className="text-center bg-gradient-to-r from-blue-50 to-teal-200 py-16 rounded-lg shadow-md mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-teal-800 mb-4">
          Your Smile, Our Passion – Let’s Connect!
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Whether you’re looking for a radiant smile or a confidence boost, our team is here to help. Reach out to us today!
        </p>
      </section>

      {/* Specialized Services Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-teal-800 text-center mb-8">
          Our Specialized Services
        </h2>z
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-teal-300 p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold text-teal-800 mb-2">Teeth Whitening</h3>
            <p className="text-gray-600">Get a dazzling smile with our advanced whitening treatments.</p>
          </div>
          <div className="bg-teal-300 p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold text-teal-800 mb-2">Invisalign</h3>
            <p className="text-gray-600">Straighten your teeth discreetly and comfortably.</p>
          </div>
          <div className="bg-teal-300 p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold text-teal-800 mb-2">Botox & Fillers</h3>
            <p className="text-gray-600">Turn back the clock with our non-invasive treatments.</p>
          </div>
          <div className="bg-teal-300 p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold text-teal-800 mb-2">Laser Skin Treatments</h3>
            <p className="text-gray-600">Achieve flawless skin with our state-of-the-art technology.</p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-teal-200 p-8 rounded-lg shadow-md mb-12">
        <h2 className="text-3xl font-bold text-teal-800 text-center mb-8">
          Get in Touch
        </h2>
        <form className="max-w-2xl mx-auto space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            required
          />
          <input
            type="tel"
            placeholder="Your Phone Number"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            required
          />
          <select
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            required
          >
            <option value="">Select a Service</option>
            <option value="dental">Dental Services</option>
            <option value="aesthetics">Aesthetics Services</option>
            <option value="both">Both</option>
          </select>
          <textarea
            placeholder="Tell us how we can help you!"
            rows={5}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-700 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Why Choose Us Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-teal-800 text-center mb-8">
          Why Trust Us with Your Smile?
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <li className="bg-teal-200 p-6 rounded-lg shadow-md">
            <p className="text-gray-600">Experienced and Caring Professionals</p>
          </li>
          <li className="bg-teal-200 p-6 rounded-lg shadow-md">
            <p className="text-gray-600">Cutting-Edge Technology</p>
          </li>
          <li className="bg-teal-200 p-6 rounded-lg shadow-md">
            <p className="text-gray-600">Personalized Treatment Plans</p>
          </li>
          <li className="bg-teal-200 p-6 rounded-lg shadow-md">
            <p className="text-gray-600">Comfortable, Stress-Free Environment</p>
          </li>
        </ul>
      </section>

      {/* Contact Information Section */}
      <section className="text-center mb-12">
        <h2 className="text-3xl font-bold text-teal-800 mb-8">
          Contact Information
        </h2>
        <div className="space-y-4">
          <p className="text-lg text-gray-600">📞 03345218215</p>
          <p className="text-lg text-gray-600">✉️ luminodac@gmail.com</p>
          <p className="text-lg text-gray-600">📍 F-8 Markaz, Islamabad</p>
        </div>
        <div className="flex justify-center space-x-6 mt-6">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-800">
            Instagram
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-800">
            Facebook
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-800">
            TikTok
          </a>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-teal-150 p-8 rounded-lg shadow-md mb-12">
        <h2 className="text-3xl font-bold text-teal-800 text-center mb-8">
          See What Our Clients Are Saying!
        </h2>
        <div className="text-center">
          <p className="text-gray-600 italic">
            “I couldn’t be happier with my new smile! The team was so professional and made me feel at ease throughout the process.”
          </p>
          <p className="text-gray-800 font-semibold mt-4">– Sarah T.</p>
        </div>
      </section>

      {/* Call-to-Action Banner */}
      <section className="bg-gradient-to-r from-teal-600 to-teal-800 text-white py-16 rounded-lg shadow-md text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Transform Your Smile?
        </h2>
        <p className="text-lg mb-8">
          Book your consultation today and take the first step toward a more confident you!
        </p>
        <button className="bg-white text-teal-600 py-3 px-8 rounded-lg hover:bg-gray-100 transition duration-300">
          Schedule Now
        </button>
      </section>
    </div>
  );
};

export default ContactUsPage;