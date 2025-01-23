import { Bell } from "lucide-react"

export default function Nav() {
  return (
    <nav className="border-b border-gray-100 bg-white px-6 py-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="rounded-md bg-black px-2 py-1 text-sm font-semibold text-white">Dash</span>
          <span className="font-semibold text-black">Board</span>
        </div>

        <h1 className="text-base font-medium text-gray-900">Monitor and track the progress of your jobs</h1>

        <div className="flex items-center gap-4">
          <button className="rounded-full p-2 hover:bg-gray-100">
            <Bell className="h-5 w-5 text-gray-600" />
          </button>
          <div className="flex flex-col items-end">
            <button className="group relative">
              <div className="mb-1 h-9 w-9 overflow-hidden rounded-full bg-orange-100">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nav-26207qLmED07JSRwh05vDdPbHxa9pp.png"
                  alt="Profile"
                  className="h-full w-full object-cover"
                />
              </div>
              <span className="text-sm text-gray-600">mr.man</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

