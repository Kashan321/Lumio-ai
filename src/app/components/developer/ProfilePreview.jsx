import React from "react";
import { FaUser, FaGraduationCap, FaTools, FaBriefcase, FaFileAlt } from 'react-icons/fa';

const ProfilePreview = ({ onEdit }) => {
  const userData = {
    basics: {
      firstName: "John",
      lastName: "Rockefeller",
      country: "United States",
      phone: "+1 657 823 6832",
      monthlyRate: "$4500",
    },
    education: {
      school: "Harvard",
      degree: "Masters",
      year: "Sept. 2015 – Aug. 2020",
      country: "United States",
      about:
        "I am a software engineer with 7+ years of experience in building scalable infrastructure for advanced software systems...",
    },
    skills: {
      expertise: "Front-end",
      experience: "7",
      skillset: ["JavaScript", "Vue.js", "React"],
    },
    workExperience: {
      company: "Apple",
      role: "Frontend Engineer",
      year: "Sept. 2015 – Aug. 2020",
      accomplishments:
        "I used my expertise to do this and that and blah blah.",
    },
  };

  return (
    <div className="profile-preview">
      <div className="profile-sections">
        <div className="section">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2">
              <FaUser className="h-5 w-5 text-black" />
              <h3 className="text-xl font-semibold text-black">Basic Information</h3>
            </div>
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              onClick={() => onEdit('basic')}
            >
              Edit
            </button>
          </div>
          <p className="text-black">First Name: {userData.basics.firstName}</p>
          <p className="text-black">Last Name: {userData.basics.lastName}</p>
          <p className="text-black">Country: {userData.basics.country}</p>
          <p className="text-black">Phone: {userData.basics.phone}</p>
          <p className="text-black">Monthly Rate: {userData.basics.monthlyRate}</p>
        </div>
        <div className="section">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2">
              <FaGraduationCap className="h-5 w-5 text-black" />
              <h3 className="text-xl font-semibold text-black">Education</h3>
            </div>
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              onClick={() => onEdit('education')}
            >
              Edit
            </button>
          </div>
          <p className="text-black">School: {userData.education.school}</p>
          <p className="text-black">Degree: {userData.education.degree}</p>
          <p className="text-black">Year: {userData.education.year}</p>
          <p className="text-black">Country: {userData.education.country}</p>
          <p className="text-black">About: {userData.education.about}</p>
        </div>
        <div className="section">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2">
              <FaTools className="h-5 w-5 text-black" />
              <h3 className="text-xl font-semibold text-black">Technical Skills</h3>
            </div>
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              onClick={() => onEdit('technical-skills')}
            >
              Edit
            </button>
          </div>
          <p className="text-black">Expertise: {userData.skills.expertise}</p>
          <p className="text-black">Years of Experience: {userData.skills.experience}</p>
          <p className="text-black">Skills: {userData.skills.skillset.join(", ")}</p>
        </div>
        <div className="section">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2">
              <FaBriefcase className="h-5 w-5 text-black" />
              <h3 className="text-xl font-semibold text-black">Work Experience</h3>
            </div>
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              onClick={() => onEdit('work-experience')}
            >
              Edit
            </button>
          </div>
          <p className="text-black">Company: {userData.workExperience.company}</p>
          <p className="text-black">Role: {userData.workExperience.role}</p>
          <p className="text-black">Year: {userData.workExperience.year}</p>
          <p className="text-black">Accomplishments: {userData.workExperience.accomplishments}</p>
        </div>
      </div>
      <div className="buttons flex justify-between mt-4">
        <button className="px-4 py-2 bg-gray-200 text-black rounded-md hover:bg-gray-300" onClick={() => onEdit('work-experience')}>
          Back
        </button>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          Save Profile
        </button>
      </div>
      <style jsx>{`
        .profile-preview {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          font-family: Arial, sans-serif;
        }
        .profile-sections {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .section {
          border: 1px solid #ddd;
          padding: 20px;
          border-radius: 8px;
          background-color: #f9f9f9;
        }
        .section h3 {
          margin-bottom: 10px;
        }
        .buttons {
          display: flex;
          justify-content: space-between;
          margin-top: 20px;
        }
      `}</style>
    </div>
  );
};

export default ProfilePreview;