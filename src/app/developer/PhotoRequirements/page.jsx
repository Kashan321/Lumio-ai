import React from 'react';
import Image from 'next/image'; // Import the Image component from next/image

export default function PhotoRequirements() {
  return (
    <div className="max-w-7xl mx-auto px-20 py-12 bg-white text-black">
      {/* Top Heading */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-center">Professional photo requirements</h1>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Left Column - Text Content */}
        <div className="space-y-8">
          <div className="space-y-6">
            <p className="text-xl">We ensure to provide companies with the best talent and great hiring experience.</p>

            <p className="text-xl">
              Please check the requirements to provide a professional and up-to-date photo of yourself.
            </p>

            <p className="text-xl">This will help you build trust and secure better chances at getting hired.</p>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Tips:</h2>
              <ul className="space-y-4">
                {[
                  "Use clear background, preferably pure white",
                  "Make sure the photo is not blurred or low in resolution",
                  "Make sure the photo is at least 400x400 pixels",
                  "Max size: 2MB",
                ].map((tip, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-black rounded-full flex-shrink-0" />
                    <span className="text-lg">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="flex flex-col items-center md:items-end">
          <Image
            src={"/assets/pic1.jpg"}
            alt="Professional photo example"
            className="w-full max-w-md rounded-lg"
            width={400} // Provide width
            height={400} // Provide height
          />
          <p className="text-xl mt-4">For reference</p>
        </div>
      </div>
    </div>
  )
}