import './App.css';
import {Button, Typography as Typo, Modal, Card} from '@mui/material';
import { useLoaderData, useNavigate, useLocation } from "react-router-dom";
import * as React from 'react';
import Utility from './Utility';
import Courses from './Courses';
import MessageBox from './MessageBox';
import Forum from './Forum';
import Navbar from './Navbar';
import EditProfile from './EditProfile.js';
import RatingInput from './RatingInput'; 

function MyProfile(){
    var data = useLoaderData();
    var nav = useNavigate();
    var location = useLocation();
    var [tutor,setTutor] = React.useState({});
    var [open,setOpen] = React.useState(false);
    const openModal = ()=>setOpen(true);

    console.log(data);
    React.useEffect(
        ()=>{//don't access useState in useEffect
            const my_effect = async ()=>{
                const my_token = await localStorage.getItem("jwt");
                Utility.SetToken(my_token);
                const res = await Utility.MyProfile()
                .then(res=> {setTutor(res.data);  return res;})
                .catch(err=>{ 
                    alert(err.code+" "+err.message+".Navigating to home page.");
                    nav("/"); 
                }); 

                console.log("me: ");
                console.log(res);
                console.log(tutor.tutorId);
                if("tutorId" in res.data)
                await Utility.TutorGetCourses(res.data.tutorId)
                .then(res=> setTutor(prev=>{return {...prev,courses:res.data}}))
                .catch(data=> {
                     nav("/userdash/test",{state:{error:["Something went wrong with the request. Navigating to userdash."]}});
                });
            }

            my_effect();
        },[nav]
    );
    
    return <div style={{textAlign:"center"}}>
    <Navbar/>
    <Typo variant='h1'>{tutor.firstName} {tutor.lastName}</Typo>
    <Typo variant='subtitle1'>{tutor.email}</Typo>
    {/*<Typo variant='p'>Graduated from {tutor.college} Majored in {tutor.major}, {tutor.degreeType}</Typo>*/}
    <Typo variant='h2'>My Courses</Typo>
    <Courses courses={tutor.courses} isTutor={"tutorId" in tutor} myProfile={true}/>
    {/*Passing the user to display their info in the message box*/}
    <EditProfile user={tutor} isTutor={"tutorId" in tutor}/>
    </div>
} export default MyProfile
