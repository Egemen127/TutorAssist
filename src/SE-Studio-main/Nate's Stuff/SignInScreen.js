import React, { useState } from 'react';

function SignInScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    // Implement your sign-in logic here
    // Check if the entered username and password are correct
    // If correct, provide access to the user's account
    // Otherwise, show an error message
  };

  return (
    <div>
      <h2>Sign In To Your Account</h2>
      <div>
        <label>
          Username:
          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Password:
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
      </div>
      <div>
        <button onClick={handleSignIn}>Sign In</button>
      </div>
      <div>
        <a href="#">Forgot Password?</a>
      </div>
    </div>
  );
}

export default SignInScreen;
