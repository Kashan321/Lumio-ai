"use client"

import { useState } from "react"
import { User, SortAsc } from "lucide-react"

import FilterMenu from "./FilterMenu"
import AIAssistant from "./AIAssistant"

export default function Nav2({ sortBy, setSortBy }) {
  const [showAI, setShowAI] = useState(false)
  const [showFilter, setShowFilter] = useState(false)
  const [showSortMenu, setShowSortMenu] = useState(false)

  const handleSortChange = (value) => {
    setSortBy(value)
    setShowSortMenu(false)
  }

  return (
    <>
      <div className="mb-1 bg-white text-black p-4 rounded-lg shadow">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Discover top-tier talent</h1>
          <User className="h-8 w-8 text-gray-600" />
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex-1 min-w-[200px]">
            <input
              type="search"
              placeholder="Search skills"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <button
            onClick={() => setShowAI(true)}
            className="px-4 py-2 bg-purple-600 text-white rounded-md flex items-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
              <path d="M5 3v4" />
              <path d="M19 17v4" />
              <path d="M3 5h4" />
              <path d="M17 19h4" />
            </svg>
            Search with AI assistant
          </button>
          <button
            onClick={() => setShowFilter(true)}
            className="px-4 py-2 border border-gray-300 rounded-md flex items-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="4" x2="4" y1="21" y2="14" />
              <line x1="4" x2="4" y1="10" y2="3" />
              <line x1="12" x2="12" y1="21" y2="12" />
              <line x1="12" x2="12" y1="8" y2="3" />
              <line x1="20" x2="20" y1="21" y2="16" />
              <line x1="20" x2="20" y1="12" y2="3" />
              <line x1="2" x2="6" y1="14" y2="14" />
              <line x1="10" x2="14" y1="8" y2="8" />
              <line x1="18" x2="22" y1="16" y2="16" />
            </svg>
            Filter requirements
          </button>
          <div className="relative">
            <button
              className="px-3 py-2 border border-gray-300 rounded-md"
              onClick={() => setShowSortMenu(!showSortMenu)}
            >
              <SortAsc className="text-purple-600" />
            </button>
            {showSortMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg">
                <div
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleSortChange('newest')}
                >
                  Newest first
                </div>
                <div
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleSortChange('salary-high')}
                >
                  Salary: High to low
                </div>
                <div
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleSortChange('salary-low')}
                >
                  Salary: Low to high
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <AIAssistant isOpen={showAI} onClose={() => setShowAI(false)} />
      <FilterMenu isOpen={showFilter} onClose={() => setShowFilter(false)} />
    </>
  )
}