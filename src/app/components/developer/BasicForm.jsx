import { useState } from "react";

import { FaUpload } from 'react-icons/fa';

function BasicForm({ onNext }) {
  const [formValues, setFormValues] = useState({
    firstName: 'John',
    lastName: 'Rockefeller',
    country: '',
    discovery: '',
    rate: '',
    phone: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormValues({ ...formValues, [id]: value });
  };

  return (
    <div className="flex-1 p-6 bg-slate-200">
      {/* Picture Upload Section */}
      <div className="flex justify-center mb-8">
        <div className="flex flex-col items-center justify-center p-8 border-2 border-dashed rounded-lg">
          <div className="w-32 h-32 bg-gray-100 rounded-full mb-4 flex items-center justify-center">
            <FaUpload className="h-8 w-8 text-gray-400" />
          </div>
          <button className="text-blue-600 text-sm hover:underline">
            Add professional photo
          </button>
          <span className="text-gray-500 text-sm">See guidelines</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="firstName" className="block text-sm font-medium text-black">
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              id="firstName"
              type="text"
              value={formValues.firstName}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md text-black"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="country" className="block text-sm font-medium text-black">
              Country of residence <span className="text-red-500">*</span>
            </label>
            <input
              id="country"
              type="text"
              value={formValues.country}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md text-black"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="discovery" className="block text-sm font-medium text-black">
              How did you discover LumioAI?
            </label>
            <select
              id="discovery"
              value={formValues.discovery}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md text-black"
            >
              <option value="">Select</option>
              <option value="search">Search Engine</option>
              <option value="social">Social Media</option>
              <option value="referral">Referral</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="space-y-2">
            <label htmlFor="rate" className="block text-sm font-medium text-black">
              Set your expected monthly rate
            </label>
            <div className="relative">
              <input
                id="rate"
                type="text"
                value={formValues.rate}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md text-black"
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                USD
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="lastName" className="block text-sm font-medium text-black">
              Last Name <span className="text-red-500">*</span>
            </label>
            <input
              id="lastName"
              type="text"
              value={formValues.lastName}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md text-black"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="phone" className="block text-sm font-medium text-black">
              Phone number <span className="text-red-500">*</span>
            </label>
            <div className="flex gap-2">
              <select className="w-[100px] px-3 py-2 border rounded-md text-black">
                <option value="us">🇺🇸 +1</option>
                <option value="uk">🇬🇧 +44</option>
                <option value="eu">🇪🇺 +33</option>
              </select>
              <input
                id="phone"
                type="tel"
                value={formValues.phone}
                onChange={handleChange}
                className="flex-1 px-3 py-2 border rounded-md text-black"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-black">Upload your resume</label>
            <div className="flex flex-col items-center justify-center p-6 border-2 border-dashed rounded-lg bg-gray-50">
              <FaUpload className="h-6 w-6 text-gray-400 mb-2" />
              <span className="text-gray-600">Upload your file</span>
            </div>
            <p className="text-sm text-gray-500">You can skip this step for now</p>
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-8">
        <button className="px-4 py-2 border rounded-md hover:bg-gray-50" onClick={() => handleBack('')}>
          Back
        </button>
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          onClick={onNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default BasicForm;