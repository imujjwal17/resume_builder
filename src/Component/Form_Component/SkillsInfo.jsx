import React, { useState } from 'react';

const SkillInfoForm = () => {
  const [formData, setFormData] = useState({
    primarySkill: '',
    primarySkillProficiency: '',
    secondarySkill: '',
    secondarySkillProficiency: '',
    additionalSkills: '',
    certifications: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Skill Form Data:', formData);
  };

  return (
    <div className="max-w-md mx-auto my-8 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Skill Information Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Primary Skill:</label>
          <input
            type="text"
            name="primarySkill"
            value={formData.primarySkill}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Proficiency Level:</label>
          <select
            name="primarySkillProficiency"
            value={formData.primarySkillProficiency}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          >
            <option value="">Select Proficiency</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
            <option value="Expert">Expert</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Secondary Skill:</label>
          <input
            type="text"
            name="secondarySkill"
            value={formData.secondarySkill}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Proficiency Level:</label>
          <select
            name="secondarySkillProficiency"
            value={formData.secondarySkillProficiency}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          >
            <option value="">Select Proficiency</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
            <option value="Expert">Expert</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Additional Skills:</label>
          <textarea
            name="additionalSkills"
            value={formData.additionalSkills}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Certifications:</label>
          <textarea
            name="certifications"
            value={formData.certifications}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SkillInfoForm;
