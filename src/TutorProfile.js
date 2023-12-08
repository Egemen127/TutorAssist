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
    console.log(data);
    React.useEffect(
        ()=>{
            const my_effect = async ()=>{
            const my_token = await localStorage.getItem("jwt");
            Utility.TutorGetTutor(data.id)
            .then(res=> setTutor(res.data))
            .catch(err=>{ 
                alert(err.code+" "+err.message+".Navigating to home page.");
                nav("/"); 
            }); 
            Utility.TutorGetCourses(data.id)
            .then(res=> setTutor(prev=>{return {...prev,courses:res.data}}))
            .catch(data=>{ nav("/userdash/test",{state:{error:["Something went wrong with the request. Navigating to userdash."]}});});
        }

        my_effect();
    },[]
    );
    
    return <div style={{textAlign:"center"}}>
    <Navbar/>
    <Typo variant='h1'>{tutor.firstName} {tutor.lastName}</Typo>
    <Typo variant='subtitle1'>{tutor.email}</Typo>
    <Typo variant='p'>Graduated from {tutor.college} Majored in {tutor.major}, {tutor.degreeType}</Typo>
    <Typo variant='h2'>Courses</Typo>
    <Courses courses={tutor.courses} isTutor={true}/>
    {/*Passing the user to display their info in the message box*/}
    <MessageBox user={tutor}/>
    </div>
} export default TutorProfile
