function WorkExperienceForm({ onNext }) {
  return (
    <div className="flex-1 p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold mb-4">Work Experience</h1>
        <p className="text-gray-600">
          The information that you provide helps us gain a clear understanding of your profile, enabling us to connect you with the right opportunities and companies that match your expertise.
        </p>
      </div>

      <form className="max-w-3xl">
        <div className="space-y-6">
          {/* Company and Role */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                Company Name
              </label>
              <input
                type="text"
                id="company"
                placeholder="Type here.."
                className="w-full px-4 py-2 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
                Role
              </label>
              <input
                type="text"
                id="role"
                placeholder="Type here.."
                className="w-full px-4 py-2 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Dates */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Start Date
              </label>
              <div className="grid grid-cols-2 gap-4">
                <select
                  defaultValue="2015"
                  className="px-4 py-2 bg-gray-100 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="2015">2015</option>
                  {/* Add more years as needed */}
                </select>
                <select
                  defaultValue="September"
                  className="px-4 py-2 bg-gray-100 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="September">September</option>
                  {/* Add more months as needed */}
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                End Date
              </label>
              <div className="grid grid-cols-2 gap-4">
                <select
                  defaultValue=""
                  className="px-4 py-2 bg-gray-100 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select</option>
                  {/* Add years as needed */}
                </select>
                <select
                  defaultValue=""
                  className="px-4 py-2 bg-gray-100 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select</option>
                  {/* Add months as needed */}
                </select>
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
              Briefly describe what did you accomplish and what skills did you use on this role
            </label>
            <textarea
              id="description"
              rows={6}
              placeholder="Type here.."
              className="w-full px-4 py-2 bg-gray-100 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Add Work Experience Button */}
          <div className="flex justify-center border-t border-b py-4">
            <button
              type="button"
              className="text-gray-600 hover:text-gray-900 flex items-center gap-2"
            >
              <span className="text-xl">—</span> Add work experience
            </button>
          </div>

        </div>

        <div className="flex justify-between mt-8">
          <button
            type="button"
            className="px-6 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
          >
            Back
          </button>
          <button
            type="button"
            onClick={onNext}
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
}

export default WorkExperienceForm;