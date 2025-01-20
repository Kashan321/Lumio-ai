"use client"

import { useState } from "react";

export default function TechnicalSkillsForm({ onNext }) {
  const [selectedSkills, setSelectedSkills] = useState([
    { id: "js", name: "JavaScript", years: 0 },
    { id: "vue", name: "Vue.js", years: 0 },
    { id: "react", name: "React", years: 0 },
  ]);
  const [role, setRole] = useState("frontend");
  const [experience, setExperience] = useState(7);
  const [skillsError, setSkillsError] = useState(false);

  const availableSkills = ["JavaScript", "Angular", "Angular JS", "Babel", "Vue.js", "Git", "React"];

  const handleNext = () => {
    // Validate required fields
    if (!experience || selectedSkills.length === 0) {
      setSkillsError(true);
      return;
    }
    setSkillsError(false);
    onNext();
  };

  return (
    <div className="max-w-2xl p-6 space-y-6">
      <div className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">
            My expertise <span className="text-red-500">*</span>
          </label>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                What role are you interested in finding a job for?
              </label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full px-3 py-2 bg-gray-100 border rounded-md"
              >
                <option value="frontend">Front-end</option>
                <option value="backend">Back-end</option>
                <option value="fullstack">Full-stack</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Years of experience <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                value={experience}
                onChange={(e) => setExperience(Number(e.target.value))}
                className="w-full px-3 py-2 bg-gray-100 border rounded-md"
              />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">
            Skills <span className="text-red-500">*</span>
          </label>
          <p className="text-sm text-gray-600">
            Select all the relevant skills. LumioAI test will be tailored on them{" "}
            <span className="text-red-500">⚠</span>
          </p>
          <div className="relative">
            <input
              type="search"
              placeholder="Search skills by name"
              className="w-full pl-10 px-3 py-2 bg-gray-100 border rounded-md"
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {availableSkills.map((skill) => (
            <button
              key={skill}
              onClick={() => setSelectedSkills([...selectedSkills, { id: skill.toLowerCase(), name: skill, years: 0 }])}
              className="px-3 py-1 rounded-full bg-blue-50 hover:bg-blue-100"
            >
              {skill}
            </button>
          ))}
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-medium text-blue-600">Your Skills</h3>
          {selectedSkills.map((skill) => (
            <div key={skill.id} className="flex items-center gap-4 bg-gray-50 p-4 rounded-lg">
              <span className="text-sm font-medium">{skill.name}</span>
              <div className="flex-1">
                <label className="block text-sm text-gray-600 mb-1">
                  Years of experience <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  value={skill.years}
                  onChange={(e) => {
                    const updatedSkills = selectedSkills.map((s) =>
                      s.id === skill.id ? { ...s, years: Number(e.target.value) } : s
                    );
                    setSelectedSkills(updatedSkills);
                  }}
                  className="max-w-[120px] px-3 py-2 bg-gray-100 border rounded-md"
                />
              </div>
            </div>
          ))}
        </div>

        {skillsError && (
          <div className="text-red-500 text-sm">
            Please fill in all required fields and select at least one skill.
          </div>
        )}
      </div>

      <div className="flex justify-between pt-4">
        <button className="px-4 py-2 border rounded-md hover:bg-gray-50">Back</button>
        <button onClick={handleNext} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          Next
        </button>
      </div>
    </div>
  );
}