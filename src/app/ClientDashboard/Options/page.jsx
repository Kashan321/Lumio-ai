"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { PenSquare, CreditCard, Plus } from "lucide-react"
import UpdatePassword from "@/app/components/ClientDashboard/UpdatePassword"

export default function AccountSettings() {
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false)

  return (
    <div className="w-full max-w-3xl mx-auto p-6">
      <div className="space-y-6">
        {/* Account Section */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex justify-between items-start">
            <div className="space-y-4 flex-1">
              <h2 className="text-lg font-semibold">Account</h2>

              <div className="space-y-2">
                <div className="flex items-center text-sm">
                  <span className="w-20">Username:</span>
                  <span className="text-gray-600">mr.man</span>
                </div>
                <div className="flex items-center text-sm">
                  <span className="w-20">Password:</span>
                  <span className="text-gray-600">••••••••</span>
                  <button onClick={() => setIsPasswordModalOpen(true)} className="ml-2">
                    <PenSquare className="w-4 h-4 text-gray-400 hover:text-gray-600" />
                  </button>
                </div>
                <div className="flex items-center text-sm">
                  <span className="w-20">E-mail:</span>
                  <span className="text-gray-600">mr.man@atlas.com</span>
                </div>
                <div className="flex items-center text-sm">
                  <span className="w-20">Phone:</span>
                  <span className="text-gray-600">+45487223823</span>
                </div>
                <div className="flex items-center text-sm">
                  <span className="w-20">Company:</span>
                  <span className="text-gray-600">Atlas</span>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-24 h-24 bg-gray-100 rounded-lg overflow-hidden">
                <Image
                  src={"/assets"}
                  alt="Profile"
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                />
              </div>
              <Link href="/ClientDashboard/Options/EditInformation">
                <PenSquare className="w-5 h-5 text-gray-400 hover:text-gray-600" />
              </Link>
            </div>
          </div>
        </div>

        {/* Payment Method Section */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Payment method</h2>
            <button>
              <PenSquare className="w-5 h-5 text-gray-400 hover:text-gray-600" />
            </button>
          </div>

          <div className="flex items-center gap-4">
            <CreditCard className="w-8 h-8 text-blue-500" />
            <span className="text-sm text-gray-600">Credit card: 45487223823</span>
          </div>
        </div>

        {/* Add Users Section */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">Add users</h2>
            <button className="text-gray-400 hover:text-gray-600">
              <Plus className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <UpdatePassword isOpen={isPasswordModalOpen} onClose={() => setIsPasswordModalOpen(false)} />
    </div>
  )
}
