"use client"
import React from "react";
import Sidebar from "@/app/components/ClientDashboard/Sidebar";
import { useState } from "react"
import { Nav3 } from "@/app/components/ClientDashboard/Nav3";

export default function Layout({ children }) {
  const [sortBy, setSortBy] = useState("newest");

  return (
    <div className="min-h-screen bg-gray-100">
      <Sidebar />
      <div className="pl-56">
        <Nav3 sortBy={sortBy} setSortBy={setSortBy} />
        <div className="bg-white text-black p-4 rounded-lg shadow">{children}</div>
      </div>
    </div>
  );
}