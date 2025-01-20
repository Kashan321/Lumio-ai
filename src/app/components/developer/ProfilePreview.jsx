import React from "react";

const ProfilePreview = () => {
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
          <h2>Basics</h2>
          <p>First Name: {userData.basics.firstName}</p>
          <p>Last Name: {userData.basics.lastName}</p>
          <p>Country: {userData.basics.country}</p>
          <p>Phone: {userData.basics.phone}</p>
          <p>Monthly Rate: {userData.basics.monthlyRate}</p>
        </div>
        <div className="section">
          <h2>Education</h2>
          <p>School: {userData.education.school}</p>
          <p>Degree: {userData.education.degree}</p>
          <p>Year: {userData.education.year}</p>
          <p>Country: {userData.education.country}</p>
          <p>About: {userData.education.about}</p>
        </div>
        <div className="section">
          <h2>Technical Skills</h2>
          <p>Expertise: {userData.skills.expertise}</p>
          <p>Years of Experience: {userData.skills.experience}</p>
          <p>Skills: {userData.skills.skillset.join(", ")}</p>
        </div>
        <div className="section">
          <h2>Work Experience</h2>
          <p>Company: {userData.workExperience.company}</p>
          <p>Role: {userData.workExperience.role}</p>
          <p>Year: {userData.workExperience.year}</p>
          <p>Accomplishments: {userData.workExperience.accomplishments}</p>
        </div>
      </div>
      <div className="buttons">
        <button className="back-button">Back</button>
        <button className="save-button">Save Profile</button>
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
        .section h2 {
          margin-bottom: 10px;
        }
        .buttons {
          display: flex;
          justify-content: space-between;
          margin-top: 20px;
        }
        button {
          padding: 10px 20px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 16px;
        }
        .back-button {
          background-color: #ddd;
          color: #333;
        }
        .back-button:hover {
          background-color: #ccc;
        }
        .save-button {
          background-color: #007bff;
          color: #fff;
        }
        .save-button:hover {
          background-color: #0056b3;
        }
      `}</style>
    </div>
  );
};

export default ProfilePreview;
