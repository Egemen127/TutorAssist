import './App.css';
import {Typography as Typo} from '@mui/material';
import { useLoaderData, useNavigate, useLocation } from "react-router-dom";
import * as React from 'react';
import Utility from './Utility';
import Courses from './Courses';
import MessageBox from './MessageBox';
import Forum from './Forum';
import Navbar from './Navbar';

function TutorProfile(){
    var data = useLoaderData();
    var nav = useNavigate();
    var location = useLocation();
    var [tutor,setTutor] = React.useState({});
    
    React.useEffect(
        ()=>{
            Utility.SetToken(location.state.token);
            Utility.TutorGetTutor(data.id)
            .then(res=> setTutor(res.data))
            .catch(data=>{ nav("/userdash/test",{state:{error:["Something went wrong with the request. Navigating to the dashboard."]}}); console.log("Something went wrong with the request. Navigating to the dashboard."); console.log(data)}); //navigate to an error page

            Utility.TutorGetCourses(data.id)
            .then(res=> setTutor(prev=>{return {...prev,courses:res.data}}))
            .catch(data=>{ nav("/userdash/test",{state:{error:["Something went wrong with the request. Navigating to the dashboard."]}}); console.log(); console.log(data)});
        },[]
    );
    
    return <div style={{textAlign:"center"}}>
    <Navbar username={location.state.username}/>
    <Typo variant='h1'>{tutor.firstName} {tutor.lastName}</Typo>
    <Typo variant='subtitle1'>{tutor.email}</Typo>
    <Typo variant='p'>Graduated from {tutor.college} Majored in {tutor.major}, {tutor.degreeType}</Typo>
    <Typo variant='h2'>Courses</Typo>
    <Courses courses={tutor.courses} isTutor={true}/>
    {/*Passing the user to display their info in the message box*/}
    <MessageBox user={tutor}/>
    </div>
} export default TutorProfile
