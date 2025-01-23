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
    stillWorking: false,
  });
  const [formError, setFormError] = useState({
    company: false,
    role: false,
    startDate: false,
    startMonth: false,
    endDate: false,
    endMonth: false,
    description: false,
  });

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormValues({
      ...formValues,
      [id]: type === 'checkbox' ? checked : value,
    });
  };

  const handleNext = () => {
    // Validate required fields
    const errors = {
      company: !formValues.company,
      role: !formValues.role,
      startDate: !formValues.startDate,
      startMonth: !formValues.startMonth,
      endDate: !formValues.endDate && !formValues.stillWorking,
      endMonth: !formValues.endMonth && !formValues.stillWorking,
      description: !formValues.description,
    };

    setFormError(errors);

    const hasErrors = Object.values(errors).some(error => error);
    if (hasErrors) {
      return;
    }

    onNext();
  };

  return (
    <div className="flex-1 p-6">
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
                className={`w-full px-4 py-2 bg-gray-100 rounded-md focus:outline-none ${formError.company ? 'border-red-500' : 'border-gray-300'} text-black`}
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
                className={`w-full px-4 py-2 bg-gray-100 rounded-md focus:outline-none ${formError.role ? 'border-red-500' : 'border-gray-300'} text-black`}
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
                  className={`px-4 py-2 bg-gray-100 rounded-md appearance-none focus:outline-none ${formError.startDate ? 'border-red-500' : 'border-gray-300'} text-black`}
                >
                  <option value="">Select</option>
                  {/* Add more years as needed */}
                  <option value="2015">2015</option>
                </select>
                <select
                  id="startMonth"
                  value={formValues.startMonth}
                  onChange={handleChange}
                  className={`px-4 py-2 bg-gray-100 rounded-md appearance-none focus:outline-none ${formError.startMonth ? 'border-red-500' : 'border-gray-300'} text-black`}
                >
                  <option value="">Select</option>
                  {/* Add more months as needed */}
                  <option value="September">September</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-black mb-1">
                End Date
              </label>
              <div className="grid grid-cols-2 gap-4">
                <select
                  id="endDate"
                  value={formValues.endDate}
                  onChange={handleChange}
                  disabled={formValues.stillWorking}
                  className={`px-4 py-2 bg-gray-100 rounded-md appearance-none focus:outline-none ${formError.endDate ? 'border-red-500' : 'border-gray-300'} text-black`}
                >
                  <option value="">Select</option>
                  {/* Add years as needed */}
                </select>
                <select
                  id="endMonth"
                  value={formValues.endMonth}
                  onChange={handleChange}
                  disabled={formValues.stillWorking}
                  className={`px-4 py-2 bg-gray-100 rounded-md appearance-none focus:outline-none ${formError.endMonth ? 'border-red-500' : 'border-gray-300'} text-black`}
                >
                  <option value="">Select</option>
                  {/* Add months as needed */}
                </select>
              </div>
            </div>
          </div>

          {/* Still Working Here */}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="stillWorking"
              checked={formValues.stillWorking}
              onChange={handleChange}
              className="h-4 w-4 text-blue-600 rounded"
            />
            <label htmlFor="stillWorking" className="ml-2 text-sm text-black">
              I am currently working here
            </label>
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
              className={`w-full px-4 py-2 bg-gray-100 rounded-md resize-none focus:outline-none ${formError.description ? 'border-red-500' : 'border-gray-300'} text-black`}
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

        {Object.values(formError).some(error => error) && (
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