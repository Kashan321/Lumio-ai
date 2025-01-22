
import React from "react"

export default function DashboardPage() {
  return (
    <main className="container mx-auto p-4 bg-white text-black">
      <div className="mb-8 flex items-start gap-6">
        <div className="h-24 w-24 overflow-hidden rounded-full">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dashboard1-zRACEYBHrSEuyeMsw7MpeYbS1JZkuN.png"
            alt="Profile"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold text-black">John D. Rockefeller</h1>
          <div className="flex items-center gap-2">
            <code className="rounded bg-gray-100 px-2 py-1 text-black">&lt;/&gt;</code>
            <span className="text-gray-600">Senior AI Engineer</span>
          </div>
          <div className="flex gap-2">
            {["Java", "JavaScript", "Python"].map((skill) => (
              <span key={skill} className="rounded-full bg-gray-200 px-3 py-1 text-sm font-medium text-gray-800">
                {skill}
              </span>
            ))}
          </div>
          <div className="mt-2 text-2xl font-bold text-black">$7,500 mo.</div>
        </div>
      </div>

      <div className="mb-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {["Job type", "Hours worked", "Salary", "Bonus"].map((item) => (
          <div key={item} className="rounded-lg border bg-white p-6 shadow-sm">
            <div className="text-sm font-medium text-gray-500">{item}</div>
          </div>
        ))}
      </div>

      <div className="mb-8">
        <h2 className="mb-4 text-lg font-semibold text-black">Payment history</h2>
        <div className="space-y-2">
          {["01/04", "01/03", "01/02", "01/01"].map((date) => (
            <div key={date} className="flex items-center justify-between rounded-lg border bg-white p-4">
              <span className="text-black">{date}</span>
              <span className="text-gray-500">Payment processed</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="mb-4 text-lg font-semibold text-black">Your notes</h2>
        <div className="min-h-[200px] rounded-lg border bg-white p-6 shadow-sm">
          {/* Notes content would go here */}
        </div>
      </div>
    </main>
  )
}

