
import React from "react";
import Sidebar from "@/app/components/ClientDashboard/Sidebar";
import Nav from "@/app/components/ClientDashboard/Nav";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <Sidebar />
      <div className="pl-56">
        <Nav />
        <div className="bg-white text-black">{children}</div>
      </div>
    </div>
  );
}