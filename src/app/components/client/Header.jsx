export default function Header() {
    return (
      <header className="bg-[#2D2D2D] text-white px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/client-GzqtfHoj8BWIuGINAGOOYNVoe8CdxX.png"
              alt="LumioAI"
              className="h-8"
            />
            <span className="ml-2 text-xl font-semibold">LumioAI</span>
          </div>
  
          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <div className="relative group">
              <button className="flex items-center text-gray-300 hover:text-white">
                Our services
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            <a href="#" className="text-gray-300 hover:text-white">
              Top-tier talent
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              How it works
            </a>
            <div className="relative group">
              <button className="flex items-center text-gray-300 hover:text-white">
                For developers
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            <a href="#" className="text-gray-300 hover:text-white">
              Blog
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              About us
            </a>
          </nav>
  
          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Get started</button>
            <div className="relative group">
              <button className="flex items-center text-gray-300 hover:text-white">
                Login
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
    )
  }
  
  