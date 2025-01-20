import React, { useState } from 'react';

function WorkExperienceForm({ onBack, onNext }) {
  const [formValues, setFormValues] = useState({
    company: '',
    role: '',
    startDate: '',
    startMonth: '',
    endDate: '',
    endMonth: '',
    description: '',
  });
  const [formError, setFormError] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormValues({ ...formValues, [id]: value });
  };

  const handleNext = () => {
    // Validate required fields
    if (!formValues.company || !formValues.role || !formValues.startDate || !formValues.startMonth || !formValues.endDate || !formValues.endMonth || !formValues.description) {
      setFormError(true);
      return;
    }
    setFormError(false);
    onNext();
  };

  return (
    <div className="flex-1 p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold mb-4 text-black">Work Experience</h1>
        <p className="text-gray-600">
          The information that you provide helps us gain a clear understanding of your profile, enabling us to connect you with the right opportunities and companies that match your expertise.
        </p>
      </div>

      <form className="max-w-3xl">
        <div className="space-y-6">
          {/* Company and Role */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-black mb-1">
                Company Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="company"
                value={formValues.company}
                onChange={handleChange}
                placeholder="Type here.."
                className="w-full px-4 py-2 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              />
            </div>
            <div>
              <label htmlFor="role" className="block text-sm font-medium text-black mb-1">
                Role <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="role"
                value={formValues.role}
                onChange={handleChange}
                placeholder="Type here.."
                className="w-full px-4 py-2 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              />
            </div>
          </div>

          {/* Dates */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-black mb-1">
                Start Date <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-2 gap-4">
                <select
                  id="startDate"
                  value={formValues.startDate}
                  onChange={handleChange}
                  className="px-4 py-2 bg-gray-100 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                >
                  <option value="">Select</option>
                  {/* Add more years as needed */}
                  <option value="2015">2015</option>
                </select>
                <select
                  id="startMonth"
                  value={formValues.startMonth}
                  onChange={handleChange}
                  className="px-4 py-2 bg-gray-100 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                >
                  <option value="">Select</option>
                  {/* Add more months as needed */}
                  <option value="September">September</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-black mb-1">
                End Date <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-2 gap-4">
                <select
                  id="endDate"
                  value={formValues.endDate}
                  onChange={handleChange}
                  className="px-4 py-2 bg-gray-100 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                >
                  <option value="">Select</option>
                  {/* Add years as needed */}
                </select>
                <select
                  id="endMonth"
                  value={formValues.endMonth}
                  onChange={handleChange}
                  className="px-4 py-2 bg-gray-100 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                >
                  <option value="">Select</option>
                  {/* Add months as needed */}
                </select>
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-black mb-1">
              Briefly describe what you accomplished and what skills you used in this role <span className="text-red-500">*</span>
            </label>
            <textarea
              id="description"
              value={formValues.description}
              onChange={handleChange}
              rows={6}
              placeholder="Type here.."
              className="w-full px-4 py-2 bg-gray-100 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            />
          </div>

          {/* Add Work Experience Button */}
          <div className="flex justify-center border-t border-b py-4">
            <button
              type="button"
              className="text-gray-600 hover:text-gray-900 flex items-center gap-2"
              onClick={() => alert('Add work experience functionality not implemented yet')}
            >
              <span className="text-xl">—</span> Add work experience
            </button>
          </div>
        </div>

        {formError && (
          <div className="text-red-500 text-sm mt-4">
            Please fill in all required fields.
          </div>
        )}

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
            onClick={handleNext}
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