import { Nav } from "@/app/components/ClientDashboard/Nav"
import Sidebar from "@/app/components/ClientDashboard/Sidebar"
import React from "react"


export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <Sidebar />
      <div className="pl-56">
        <Nav />
        <div className="bg-white text-black">{children}</div>
      </div>
    </div>
  )
}

