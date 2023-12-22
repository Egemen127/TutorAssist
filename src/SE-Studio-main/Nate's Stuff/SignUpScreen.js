import React, { useState } from 'react';

function SignUpScreen() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [birthdayMonth, setBirthdayMonth] = useState('');
  const [birthdayDay, setBirthdayDay] = useState('');
  const [birthdayYear, setBirthdayYear] = useState('');
  const [gender, setGender] = useState('');
  const [securityQuestion1, setSecurityQuestion1] = useState('');
  const [securityAnswer1, setSecurityAnswer1] = useState('');
  const [securityQuestion2, setSecurityQuestion2] = useState('');
  const [securityAnswer2, setSecurityAnswer2] = useState('');

  return (
    <div>
      <h2>Sign Up</h2>
      <div>
        <label>
          First Name:
          <input
            type="text"
            placeholder="Enter your first name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            placeholder="Enter your last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
        <label>
          Email Address:
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Username:
          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label>
          Confirm Password:
          <input
            type="password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Birthday:
          <select value={birthdayMonth} onChange={(e) => setBirthdayMonth(e.target.value)}>
            {/* Dropdown options for months */}
          </select>
          <select value={birthdayDay} onChange={(e) => setBirthdayDay(e.target.value)}>
            {/* Dropdown options for days */}
          </select>
          <select value={birthdayYear} onChange={(e) => setBirthdayYear(e.target.value)}>
            {/* Dropdown options for years */}
          </select>
        </label>
        <label>
          Gender:
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="preferNotToSay">Prefer Not to Say</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Security Question 1:
          <select value={securityQuestion1} onChange={(e) => setSecurityQuestion1(e.target.value)}>
            {/* Dropdown options for security questions */}
          </select>
        </label>
        <label>
          Security Question 1 Answer:
          <input
            type="text"
            placeholder="Enter your answer"
            value={securityAnswer1}
            onChange={(e) => setSecurityAnswer1(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Security Question 2:
          <select value={securityQuestion2} onChange={(e) => setSecurityQuestion2(e.target.value)}>
            {/* Dropdown options for security questions */}
          </select>
        </label>
        <label>
          Security Question 2 Answer:
          <input
            type="text"
            placeholder="Enter your answer"
            value={securityAnswer2}
            onChange={(e) => setSecurityAnswer2(e.target.value)}
          />
        </label>
      </div>
      <div>
        <button onClick={handleSignUp}>Submit</button>
      </div>
    </div>
  );
}

    return (
        <div>
          <h1>My Application</h1>
          {showConfirmation ? (
            <ConfirmationScreen /> // Conditionally render the confirmation screen
          ) : (
            <SignUpScreen handleSignUp={handleSignUp} /> // Pass the handleSignUp function as a prop
          )}
        </div>
      );
    
export default SignUpScreen;
