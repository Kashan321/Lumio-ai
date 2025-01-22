import React from "react"
import { Bell } from "lucide-react"

export function Nav() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white">
      <div className="flex h-14 items-center justify-end px-4 md:px-6">
        <div className="flex items-center gap-2">
          <button className="rounded-full p-2 text-gray-600 hover:bg-gray-100">
            <Bell className="h-4 w-4" />
            <span className="sr-only">Notifications</span>
          </button>
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dashboard1-zRACEYBHrSEuyeMsw7MpeYbS1JZkuN.png"
            alt="Profile"
            className="h-8 w-8 rounded-full object-cover"
          />
          <span className="text-sm font-medium text-black">mr.man</span>
        </div>
      </div>
    </header>
  )
}

