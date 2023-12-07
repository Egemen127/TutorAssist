import './App.css';
import {Typography as Typo} from '@mui/material';
import { useLoaderData, useNavigate,useLocation } from "react-router-dom";
import * as React from 'react';
import Utility from './Utility';
import Courses from './Courses';
import MessageBox from './MessageBox';
import Forum from './Forum';
import Navbar from './Navbar';

function StudentProfile(){
    
    var data = useLoaderData();
    var nav = useNavigate();
    var location = useLocation();

    const [student,setStudent] = React.useState({});
    React.useEffect(()=>{
        Utility.SetToken(location.state?.token);
        Utility.StudentGetStudent(data.id).then(res=> setStudent(res.data)).catch(data=>{ nav("/userdash/test",{state:{error:["Something went wrong with the request. Navigating to the dashboard."]}});
        });
    },[]);
        
    
    return <div style={{textAlign:"center"}}>
        <Navbar username={location.state.username}/>
    <Typo variant='h1'>{student.firstName} {student.lastName}</Typo>
    <Typo variant='subtitle1'>{student.email}</Typo>
    <Typo variant='h2'>Courses</Typo>
    <Courses courses={student.courses} isTutor={false}/>
    {/*Passing the user to display their info in the message box*/}
    <MessageBox user={student}/>
    </div>
} export default StudentProfile
