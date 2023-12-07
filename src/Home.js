import './App.css';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Utility from './Utility';
import axios from 'axios';

function Home() {
  const navigate =  useNavigate();
  const [credentials,setCredentials] = useState({username:"",password:""});
  const [register,setRegister] = useState({securityQues:"question 1"});
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {if(window.confirm("Closing register window"))setOpen(false);}

  //add login logic here
  const clickButton = (e)=>{
    if(e.target.name === "Login"){
     if(!(credentials.username && credentials.password)){
      alert("Please enter your username and password");
      return;
     }
     if(credentials.username && credentials.password)
      Utility.Authenticate(credentials).then(res=>{
      Utility.SetToken(res.data.token);
      navigate("/userdash/"+credentials.username,{state:{...res.data,error:["Successfully logged in!"],username:credentials.username}})}).catch(err=> alert(err.code+": "+err.message));

    } else {
      //register logic
      if(register.user_type == "student")
      Utility.StudentCreate(register).then(res=> {alert("student account created");setOpen(false);})
    .catch(err=> alert(err.message));
      if(register.user_type == "tutor")
      Utility.TutorCreate(register).then(res=> {alert("tutor account created");setOpen(false);})
    .catch(err=> alert(err.message));
    }
    
  };

  const handleChange = (e)=>{
    if(!open){
      setCredentials(prev=>{
      return {...prev,[e.target.name]:e.target.value};
      });
      console.log("current name&password "+credentials.username+" "+credentials.password);
    }else {
      setRegister(prev=>{
      return {...prev,[e.target.name]:e.target.value};
      });
      console.log(register);
    }
  }

  //todo: break down the page into different component to reuse
  return (
    <div className="App">
      <header className="App-header">
        <img className='App-logo'src='https://picsum.photos/50' alt='tutorassist.io logo'/>
        <h2>TutorAssist.IO</h2>
        <div className='login-wrapper'>
          <input className='input-field' value={credentials.username} //onKeyDown={(e)=>{if(e.key=='Enter')clickButton(e)}} 
          onChange={handleChange} placeholder='Username' type={'username'}
          label='username'
          name = 'username' />
          <input className='input-field' value={credentials.password} //onKeyDown={(e)=>{if(e.key=='Enter')clickButton(e)}} 
          onChange={handleChange} placeholder='Password' type={'password'} id='password'
          name='password'/>
          <button className='Button' name="Login"  onClick={clickButton}>Login</button>
          <button className='Button' name="Register"  onClick={handleOpen}>Register</button>
          <a href="/forgotpw">Forgot Password</a>
        </div>
      </header>
      <div className='App-body'>
        <div className='about-us frame'>
          <h1>About Us</h1>
          <p>Unlike many existing
tutoring applications that require costly subscriptions and lack the assurance of tutor
accreditation, our platform caters to students of all socioeconomic levels, offering them
high-quality, personalized tutoring in a range of subjects. Our application enables students to
search for tutors based on subject expertise, availability, and ratings, facilitating an engaging and
seamless learning experience. From K-12 to higher education, our core objective is to enhance
the knowledge and skills of students, not only improving their academic performance but also
empowering them for future career success.</p>
        </div>
        <div className='register frame'>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box className='register-form' style={style}>
            <h1>Register</h1>
            <input className='input-field' placeholder='Username' type={'username'} onChange={handleChange}
              label='username'
              name = 'username' />
            <input className='input-field' placeholder='First Name' type={'firstName'} onChange={handleChange}
              label='firstName'
              name = 'firstName' />
            <input className='input-field' placeholder='Last Name' type={'lastName'} onChange={handleChange}
              label='lastName'
              name = 'lastName' />
            <input className='input-field' placeholder='Email' type={'email'} onChange={handleChange}
              label='email'
              name = 'email' />
            <input className='input-field' placeholder='Password' type={'password'} onChange={handleChange}
              name='password'/>
            <input className='input-field' placeholder='Confirm Password' type={'password'} onChange={handleChange}
              name='confirm_password'/>
            <select className="input-field" name='securityQues' id="q_1" onChange={handleChange}>
              <option value="option 1">question1</option>
              <option value="option 2">question2</option>
              </select>
            <input className='input-field' placeholder='Answer 1' type={'text'} onChange={handleChange}
              label='answer1'
              name = 'securityAns' />
              <p>Select a user type:</p>
            <div><input type="radio" id="student" name="user_type" onChange={handleChange} value="student"/>
            <label for="student">Student</label>
            <input type="radio" id="tutor" name="user_type" onChange={handleChange} value="tutor"/>
            <label for="tutor">Tutor</label></div>
            <button className='Button' name="Submit" onClick={clickButton}>Submit</button>
            </Box>
          </Modal>
          <p>User registration form will include username, password, security questions, security
          answers, and email.
          ● Admin will approve the registration request from the visitor, and the system will send an
          email notification.
          ● If a user forgets a password, they can reset it using their security questions.</p>
        </div>
      </div>
      <footer style={{backgroundColor:"red", justifyContent:"flex-end"}}>TutorAssist.io</footer>
    </div>
  );
}
export default Home;