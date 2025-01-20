import React from "react"
import logo from "./logo.png"

function Navbar({ onLogout }) {

  return (
    <nav className="bg-gray-800 px-4 py-2 flex justify-between items-center">
      <div className="flex items-center">
        <img
          src={logo}
          alt="LumioAI Logo"
          width={120}
          height={30}
          className="h-8 w-auto"
        />
      </div>
      <button className="text-white flex items-center gap-2 hover:text-gray-300" onClick={onLogout}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
          <polyline points="16 17 21 12 16 7" />
          <line x1="21" y1="12" x2="9" y2="12" />
        </svg>
        Logout
      </button>
    </nav>
  )
}

export default Navbar