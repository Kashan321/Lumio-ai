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
    'technical-skills': { isCompleted: false, hasError: false },
    'work-experience': { isCompleted: false, hasError: false },
  });

  const handleNext = (currentStep, nextStep) => {
    const isValid = validateForm(currentStep);
    setFormStatus((prevStatus) => ({
      ...prevStatus,
      [currentStep]: { isCompleted: isValid, hasError: !isValid },
    }));

    if (isValid) {
      setActiveStep(nextStep);
    }
  };

  const handleBack = (previousStep) => {
    setActiveStep(previousStep);
  };

  const validateForm = (step) => {
    // Implement form validation logic here
    return true; // For now, assuming the form is always valid
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="m-8">
        <h1 className="text-2xl font-semibold mb-4 text-black">My Profile</h1>
        <p className="text-gray-600">
          The information that you provide helps us gain a clear understanding of your profile, enabling us to connect you with the right opportunities and companies that match your expertise.
        </p>
      </div>
      <div className="flex px-36">
        <Sidebar activeStep={activeStep} formStatus={formStatus} />
        <div className="flex-1 p-6">
          {activeStep === 'basic' && <BasicForm onNext={() => handleNext('basic', 'education')} />}
          {activeStep === 'education' && <EducationForm onBack={() => handleBack('basic')} onNext={() => handleNext('education', 'technical-skills')} />}
          {activeStep === 'technical-skills' && <TechnicalSkillForm onBack={() => handleBack('education')} onNext={() => handleNext('technical-skills', 'work-experience')} />}
          {activeStep === 'work-experience' && <WorkExperienceForm onBack={() => handleBack('technical-skills')} onNext={() => handleNext('work-experience', 'profile-preview')} />}
          {activeStep === 'profile-preview' && <ProfilePreview onEdit={(section) => setActiveStep(section)} />}
        </div>
      </div>
    </div>
  );
}