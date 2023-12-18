import React, { useState } from 'react';

const EducationInfo = () => {
  const [formData, setFormData] = useState({
    schoolName: '',
    degree: '',
    graduationYear: '',
    major: '',
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
    console.log('Education Form Data:', formData);
  };

  return (
    <div>
      <h2>Education Information Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          School/University Name:
          <input
            type="text"
            name="schoolName"
            value={formData.schoolName}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Degree:
          <input type="text" name="degree" value={formData.degree} onChange={handleChange} />
        </label>
        <br />
        <label>
          Graduation Year:
          <input
            type="number"
            name="graduationYear"
            value={formData.graduationYear}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Major:
          <input type="text" name="major" value={formData.major} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EducationInfo;
