import React ,{ useState } from 'react';

const Form = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    personalInfo: {},
    educationInfo: [],
    experienceInfo: [],
    skillsInfo: [],
  });

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  switch (step) 
  {
    case 1:
      return <PersonalInfo nextStep={nextStep} handleChange={handleChange} />;
    case 2:
      return <EducationInfo nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} />;
    case 3:
      return <ExperienceInfo nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} />;
    case 4:
      return <SkillsInfo nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} />;
    case 5:
      return <Review formData={formData} prevStep={prevStep} nextStep={nextStep} />;
    case 6:
      return <Submit formData={formData} />;
    default:
      return null;
    }
}

export default Form;
