import React from "react";

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
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Profile Preview</h2>
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          onClick={() => onEdit('basic')}
        >
          Edit
        </button>
      </div>
      <div className="profile-sections">
        <div className="section">
          <h3>Basics</h3>
          <p>First Name: {userData.basics.firstName}</p>
          <p>Last Name: {userData.basics.lastName}</p>
          <p>Country: {userData.basics.country}</p>
          <p>Phone: {userData.basics.phone}</p>
          <p>Monthly Rate: {userData.basics.monthlyRate}</p>
        </div>
        <div className="section">
          <h3>Education</h3>
          <p>School: {userData.education.school}</p>
          <p>Degree: {userData.education.degree}</p>
          <p>Year: {userData.education.year}</p>
          <p>Country: {userData.education.country}</p>
          <p>About: {userData.education.about}</p>
        </div>
        <div className="section">
          <h3>Technical Skills</h3>
          <p>Expertise: {userData.skills.expertise}</p>
          <p>Years of Experience: {userData.skills.experience}</p>
          <p>Skills: {userData.skills.skillset.join(", ")}</p>
        </div>
        <div className="section">
          <h3>Work Experience</h3>
          <p>Company: {userData.workExperience.company}</p>
          <p>Role: {userData.workExperience.role}</p>
          <p>Year: {userData.workExperience.year}</p>
          <p>Accomplishments: {userData.workExperience.accomplishments}</p>
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