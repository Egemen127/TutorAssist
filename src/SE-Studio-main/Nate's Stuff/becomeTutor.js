import React, { useState } from 'react';

function BecomeTutor({ setPage }) {
  // Define your state variables for input fields and error messages
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [university, setUniversity] = useState('');
  const [degreeType, setDegreeType] = useState('');
  const [major, setMajor] = useState('');
  const [graduationYear, setGraduationYear] = useState('');
  const [tutorLevels, setTutorLevels] = useState([]);
  const [subjectsInterested, setSubjectsInterested] = useState('');
  const [languagesToTutor, setLanguagesToTutor] = useState('');
  const [securityQuestion1, setSecurityQuestion1] = useState('');
  const [securityAnswer1, setSecurityAnswer1] = useState('');
  const [securityQuestion2, setSecurityQuestion2] = useState('');
  const [securityAnswer2, setSecurityAnswer2] = useState('');
  const [securityQuestionError, setSecurityQuestionError] = useState('');

  const securityQuestions = [
    "What is your mother's maiden name?",
    'What is the name of your first pet?',
    'In what city were you born?',
  ];

  const handleSubmit = () => {
    // Implement form submission logic here
    if (securityQuestion1 === securityQuestion2) {
      setSecurityQuestionError('Security questions must be different.');
    } else {
      // Handle form submission and show confirmation screen
      // You can use the 'setPage' function passed from the parent component
      // to navigate to the confirmation screen by setting it to 'confirmation'
      setPage('confirmation');
    }
  };

  return (
    <div className="App">
      <h1>Become a Tutor</h1>
      <label>
        First Name:
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </label>
      {/* Add similar input fields for other form elements */}
      {/* Handle tutor levels, subjects, and languages as multi-select checkboxes */}
      <label>
        Select Tutor Levels:
        <select multiple>
          <option value="K-12">K-12</option>
          <option value="Undergraduate">Undergraduate</option>
          <option value="Graduate">Graduate</option>
        </select>
      </label>
      <label>
        Subjects Interested In:
        <textarea
          placeholder="List all subjects"
          value={subjectsInterested}
          onChange={(e) => setSubjectsInterested(e.target.value)}
          maxLength="500"
        />
      </label>
      <label>
        Languages to Tutor In:
        <textarea
          placeholder="List all languages"
          value={languagesToTutor}
          onChange={(e) => setLanguagesToTutor(e.target.value)}
          maxLength="200"
        />
      </label>
      <label>
        Security Question 1:
        <select value={securityQuestion1} onChange={(e) => setSecurityQuestion1(e.target.value)}>
          <option value="">Select Security Question 1</option>
          {securityQuestions.map((question) => (
            <option key={question} value={question}>
              {question}
            </option>
          ))}
        </select>
      </label>
      <input
        type="text"
        placeholder="Answer to Question 1"
        value={securityAnswer1}
        onChange={(e) => setSecurityAnswer1(e.target.value)}
      />
      <label>
        Security Question 2:
        <select value={securityQuestion2} onChange={(e) => setSecurityQuestion2(e.target.value)}>
          <option value="">Select Security Question 2</option>
          {securityQuestions.map((question) => (
            <option key={question} value={question}>
              {question}
            </option>
          ))}
        </select>
      </label>
      <input
        type="text"
        placeholder="Answer to Question 2"
        value={securityAnswer2}
        onChange={(e) => setSecurityAnswer2(e.target.value)}
      />
      {securityQuestionError && <p>{securityQuestionError}</p>}
      <button className="Button" name="Submit" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

export default BecomeTutor;

