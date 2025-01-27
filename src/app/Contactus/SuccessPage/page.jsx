import React from "react"
import "./style.css"
import Header from "@/app/components/client/Header"


export default function SuccessPage() {
    return (
        <div className="min-h-screen bg-white text-black">
            <Header />
            <div className="min-h-screen flex items-center justify-center p-4">
                <div className="bg-white rounded-lg p-8 max-w-2xl w-full text-center">
                    <div className="flex items-center justify-center mb-10">
                        <div className="check-circle">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="check-icon">
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                <path d="M22 4L12 14.01l-3-3"></path>
                            </svg>
                        </div>
                    </div>

                    <p className="text-1xl mb-8 leading-relaxed text-gray-800">
                        Thanks For contacting us, our team will reach you out shortly.
                    </p>

                    <p className="text-1xl font-medium mb-12 text-gray-800">Thanks for choosing LumioAI</p>

                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-9 rounded-md text-lg transition duration-300 ease-in-out">
                        Close
                    </button>
                </div>
            </div>
        </div>
    )
}