export function DeveloperCard({ name, position, skills, salary, avatar, status, onOptionsClick }) {
    return (
      <div className="bg-white p-4 rounded-lg border mb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src={avatar || "/placeholder.svg"} alt={name} className="w-12 h-12 rounded-full" />
            <div>
              <h3 className="font-medium">{name}</h3>
              <p className="text-sm text-gray-600">{position}</p>
              <div className="flex gap-2 mt-2">
                {skills.map((skill) => (
                  <span key={skill} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="flex items-start gap-8">
            <div className="text-right">
              <p className="font-medium">{salary}</p>
              <p className="text-sm text-gray-500">mo.</p>
            </div>
            <div className="flex flex-col items-end gap-2">
              <span className={`text-sm font-medium ${status === "HIRED" ? "text-green-600" : "text-red-600"}`}>
                {status}
              </span>
              <button onClick={onOptionsClick} className="text-sm text-gray-600 flex items-center gap-1">
                Options
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
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  