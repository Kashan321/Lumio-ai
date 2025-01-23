"use client"
import ExperienceTimeline from "@/app/components/DeveloperProfile/ExperienceTimeline"
import React, { useState } from "react"

export default function DeveloperProfile() {
  const [selectedTab, setSelectedTab] = useState("vetting")
  const [showVettingDetails, setShowVettingDetails] = useState(false)

  const renderVettingContent = () => {
    if (!showVettingDetails) {
      return (
        <div className="text-center">
          <h3 className="mb-4 text-xl font-semibold">You haven't taken any test yet.</h3>
          <p className="mx-auto mb-8 max-w-2xl">
            To be able to work with the best companies, each and every member of LumioAI talent network goes through
            vetting process that will evaluate their skills. Let us know your expertise level and we will make sure to
            connect you with the right companies.
          </p>
          <button
            className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
            onClick={() => setShowVettingDetails(true)}
          >
            Start LumioAI Test
          </button>
        </div>
      )
    }

    return (
      <div className="text-left">
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span>2 tests left until LumioAI certification</span>
            <button className="text-blue-600 hover:underline">+ Add skills</button>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-green-500 h-2 rounded-full w-2/3"></div>
          </div>
        </div>

        {/* Python */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🐍</span>
              </div>
              <span className="font-medium">Python</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-32 bg-gray-200 rounded-full h-2 mr-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: "97%" }}></div>
              </div>
              <span className="text-green-600">97%</span>
              <span className="text-green-600">Senior-level</span>
              <span className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">✓</span>
            </div>
          </div>
          <p className="text-sm pl-16">
            John demonstrated deep understanding of Python language by doing this and that. Having worked with company X
            he acquired expertise by working on X model. He is especially skilled in developing X.Y.
          </p>
        </div>

        {/* JavaScript */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">JS</span>
              </div>
              <span className="font-medium">JavaScript</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-32 bg-gray-200 rounded-full h-2 mr-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: "94%" }}></div>
              </div>
              <span className="text-green-600">94%</span>
              <span className="text-green-600">Senior-level</span>
              <span className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">✓</span>
            </div>
          </div>
          <p className="text-sm pl-16">
            John demonstrated deep understanding of JavaScript language by doing this and that. Having worked with
            company X he acquired expertise by working on X model. He is especially skilled in developing X.Y.
          </p>
        </div>

        {/* Angular */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">A</span>
              </div>
              <span className="font-medium">Angular</span>
            </div>
            <button className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">Take test</button>
          </div>
          <p className="text-sm pl-16 text-gray-500">Test not taken</p>
        </div>

        {/* Bottom Metrics */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full border-2 border-gray-200 flex items-center justify-center">
              <span className="text-lg">&lt;/&gt;</span>
            </div>
            <div>
              <div className="text-sm">Coding challenge score</div>
              <div className="font-medium">90</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full border-2 border-gray-200 flex items-center justify-center">
              <span className="text-lg">👤</span>
            </div>
            <div>
              <div className="text-sm">Soft Skills</div>
              <div className="text-green-600">optimal</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const renderContent = () => {
    switch (selectedTab) {
      case "vetting":
        return renderVettingContent()
      case "about":
        return (
          <div className="relative">
            <div className="absolute right-0 top-0 text-sm">LumioAI member since Jan 15, 2025</div>

            <div className="space-y-8">
              <div>
                <h3 className="font-semibold mb-2">BIO</h3>
                <p className="text-sm leading-relaxed">
                  I am a software engineer with 7+ years of experience in building strong infrastructure for advanced
                  software systems, I've worked in 2 successful startups where my responsibilities were to create and
                  maintain complex structures, analyze data and manage AI integrations. I am ready to take on a new
                  challenge.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-6 h-6">
                    <span className="text-xl">🏛️</span>
                  </div>
                  <h3 className="font-semibold">Education</h3>
                </div>
                <div className="ml-8">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Harvard University</span>
                    <span className="text-sm">2015-2020</span>
                  </div>
                  <div className="text-sm">Masters</div>
                </div>
              </div>
            </div>
          </div>
        )
      case "experience":
        return (
          <div>
            <ExperienceTimeline />
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="flex min-h-screen bg-gray-50 text-black">
      {/* Sidebar */}
      <div className="w-64 border-r bg-white p-6">
        <nav className="space-y-2">
          <div className="flex items-center gap-3 rounded-lg px-3 py-2">
            <span>📊</span>
            <span>Dashboard</span>
          </div>
          <div className="flex items-center gap-3 rounded-lg bg-blue-50 px-3 py-2 text-blue-600">
            <span>🏠</span>
            <span>My Profile</span>
          </div>
          <div className="flex items-center gap-3 rounded-lg px-3 py-2">
            <span>📈</span>
            <span>Payments & Reports</span>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold">My Profile</h1>
        </div>

        {/* Profile Section */}
        <div className="mb-8 flex items-start justify-between">
          <div className="flex items-center gap-4">
            <div className="h-24 w-24 overflow-hidden rounded-full">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dashboard-1uoRMkaSfKhB8JkjYMPywv1FdkhcRS.png"
                alt="Profile"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-semibold">John Rockefeller</h2>
              </div>
              <div className="mt-1 flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <span>Front-end engineer</span>
                </div>
                <div>7+ years of experience</div>
              </div>
              <div className="mt-1 flex items-center gap-2">
                <span className="text-sm">🇺🇸 United States</span>
              </div>
            </div>
          </div>
          <div className="text-right">
            <button className="rounded bg-transparent px-2 py-1 text-sm text-blue-600 hover:bg-blue-50 mb-2">
              Edit profile
            </button>
            <div className="text-sm">Rate: $4,500 mo.</div>
            <div className="mt-1 flex items-center justify-end gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-green-500"></span>
              <span className="text-sm">Available for work</span>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-8 flex gap-4">
          <button
            className={`rounded px-4 py-2 ${selectedTab === "vetting" ? "bg-blue-50 text-blue-600" : "hover:bg-gray-100"}`}
            onClick={() => setSelectedTab("vetting")}
          >
            LumioAI Vetting Results
          </button>
          <button
            className={`rounded px-4 py-2 ${selectedTab === "about" ? "bg-blue-50 text-blue-600" : "hover:bg-gray-100"}`}
            onClick={() => setSelectedTab("about")}
          >
            About John
          </button>
          <button
            className={`rounded px-4 py-2 ${selectedTab === "experience" ? "bg-blue-50 text-blue-600" : "hover:bg-gray-100"}`}
            onClick={() => setSelectedTab("experience")}
          >
            Work Experience
          </button>
        </div>

        {/* Content */}
        {renderContent()}
      </div>

      {/* Support Button */}
      <button className="fixed bottom-4 left-4 rounded-md bg-teal-100 px-4 py-2 text-teal-900 hover:bg-teal-200">
        Support
      </button>
    </div>
  )
}


