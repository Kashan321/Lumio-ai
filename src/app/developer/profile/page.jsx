"use client"
import BasicForm from '@/app/components/developer/BasicForm';
import EducationForm from '@/app/components/developer/EducationForm';
import Navbar from '@/app/components/developer/Navbar';
import ProfilePreview from '@/app/components/developer/ProfilePreview';
import Sidebar from '@/app/components/developer/Sidebar';
import TechnicalSkillForm from '@/app/components/developer/TechnicalSkillForm';
import WorkExperienceForm from '@/app/components/developer/WorkExperienceForm';
import { useState } from 'react';


export default function ProfilePage() {
  const [activeStep, setActiveStep] = useState('basic');
  const [formStatus, setFormStatus] = useState({
    basic: { isCompleted: false, hasError: false },
    education: { isCompleted: false, hasError: false },
    'work-experience': { isCompleted: false, hasError: false },
  });

  const handleNext = (currentStep, nextStep) => {
    // Perform validation for the current step
    const isValid = validateForm(currentStep);
    setFormStatus((prevStatus) => ({
      ...prevStatus,
      [currentStep]: { isCompleted: isValid, hasError: !isValid },
    }));

    if (isValid) {
      setActiveStep(nextStep);
    }
  };

  const validateForm = (step) => {
    // Perform validation for the given step
    // This is a placeholder function, you need to implement actual validation logic
    return true; // Assume all fields are valid for now
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex">
        <Sidebar activeStep={activeStep} formStatus={formStatus} />
        <div className="flex-1 p-6">
          {activeStep === 'basic' && <BasicForm onNext={() => handleNext('basic', 'education')} />}
          {activeStep === 'education' && <EducationForm onNext={() => handleNext('education', 'technical-skills')} />}
          {activeStep === 'technical-skills' && <TechnicalSkillForm onNext={() => handleNext('technical-skills', 'work-experience')} />}
          {activeStep === 'work-experience' && <WorkExperienceForm onNext={() => handleNext('work-experience', 'profile-preview')} />}
          {activeStep === 'profile-preview' && <ProfilePreview onNext={() => handleNext('profile-preview')} />}
          {/* Add more forms as needed */}
        </div>
      </div>
    </div>
  );
}