"use client"

import Header from "@/app/components/client/Header"

export default function JobTiming() {
    return (
        <div className="min-h-screen bg-white text-black">
            <Header />
            <div className="min-h-screen flex items-center justify-center p-4 bg-white">
                <div className="w-full max-w-xl p-8 space-y-8 bg-white shadow-md rounded-lg">
                    <h2 className="text-1xl font-semibold text-black">Your Company Information?</h2>

                    <div className="flex flex-col gap-4">
                        <button className="w-full h-16 py-2 text-lg text-black border border-gray-300 rounded-md hover:bg-gray-100">
                            Professional Email
                        </button>


                        <button className="w-full h-16 py-2 text-lg text-black border border-gray-300 rounded-md hover:bg-gray-100">
                            Phone Number
                        </button>
                    </div>

                    <div className="flex justify-between pt-4">
                        <button className="px-8 py-2 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-100">
                            Back
                        </button>

                        <button className="px-8 py-2 text-white bg-black rounded-md hover:bg-black/90">
                            Not sure yet
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}