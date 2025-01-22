import { DeveloperCard } from "@/components/developer-card"

export default function SearchPage() {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Discover top-tier talent</h1>

      <div className="flex gap-4 mb-8">
        <div className="flex-1 relative">
          <input type="search" placeholder="Search skills" className="w-full px-4 py-2 pl-10 border rounded-lg" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Search with AI assistant
        </button>
        <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">Filter requirements</button>
      </div>

      <div className="space-y-4">
        {[1, 2, 3, 4].map((i) => (
          <DeveloperCard
            key={i}
            name="John D. Rockefeller"
            role="Senior AI Engineer"
            skills={["Java", "JavaScript", "Python"]}
            salary="7,500"
          />
        ))}
      </div>
    </div>
  )
}

