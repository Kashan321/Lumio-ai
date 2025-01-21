function EducationForm({ onBack, onNext }) {
  return (
    <div className="flex-1 p-6">
      <form className="max-w-3xl">
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="school" className="block text-sm font-medium text-black">
                School or University <span className="text-red-500">*</span>
              </label>
              <input
                id="school"
                type="text"
                placeholder="Type here.."
                className="w-full px-3 py-2 bg-gray-100 border-none rounded-md text-black"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="degree" className="block text-sm font-medium text-black">
                Degree <span className="text-red-500">*</span>
              </label>
              <select
                id="degree"
                className="w-full px-3 py-2 bg-gray-100 border-none rounded-md appearance-none text-black"
              >
                <option value="">Select</option>
                <option value="bachelors">Bachelor's Degree</option>
                <option value="masters">Master's Degree</option>
                <option value="phd">Ph.D.</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="country" className="block text-sm font-medium text-black">
              Issuing Country <span className="text-red-500">*</span>
            </label>
            <input
              id="country"
              type="text"
              placeholder="Type here.."
              className="w-full px-3 py-2 bg-gray-100 border-none rounded-md text-black"
            />
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-black">
                Start Date <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-2 gap-4">
                <select className="px-3 py-2 bg-gray-100 border-none rounded-md appearance-none text-black">
                  <option>2015</option>
                </select>
                <select className="px-3 py-2 bg-gray-100 border-none rounded-md appearance-none text-black">
                  <option>September</option>
                </select>
              </div>
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-black">
                End Date <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-2 gap-4">
                <select className="px-3 py-2 bg-gray-100 border-none rounded-md appearance-none text-black">
                  <option>Select</option>
                </select>
                <select className="px-3 py-2 bg-gray-100 border-none rounded-md appearance-none text-black">
                  <option>Select</option>
                </select>
              </div>
            </div>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="stillStudying"
              className="h-4 w-4 text-blue-600 rounded"
            />
            <label htmlFor="stillStudying" className="ml-2 text-sm text-black">
              Still studying
            </label>
          </div>

          <div className="space-y-2">
            <label htmlFor="about" className="block text-sm font-medium text-black">
              About you (Let us know briefly about yourself)
            </label>
            <textarea
              id="about"
              rows={6}
              placeholder="Type here.."
              className="w-full px-3 py-2 bg-gray-100 border-none rounded-md resize-none text-black"
            />
          </div>

          <button
            type="button"
            className="text-blue-600 hover:underline"
          >
            Add Education
          </button>
        </div>

        <div className="flex justify-between mt-8">
          <button
            type="button"
            className="px-6 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
            onClick={onBack}
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

export default EducationForm;