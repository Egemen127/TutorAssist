import { ListItem, List, ListItemText, Button, Typography as Typo,Divider } from "@mui/material";
import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import Utility from "./Utility";

function Registration(props){
    const [courses,setCourses] = useState({});
    const style = {borderRadius:5};

    const acceptStudent = (e)=>{
        Utility.RegisterationAccept(e.target.name).then(res=> alert(res.data)).catch(err=> alert(err.message));
    };

    const rejectStudent = (e) => {
        if(!props.isTutor){
            alert("todo: add cancel logic for student!!");
            return;
        }

        Utility.RegisterationReject(e.target.name).then(res=> alert(res.data)).catch(err=> alert(err.message+" "+e.target.name));
    }
    //const registrations = props.registration;
    //getting course information from the api
    useEffect(()=>{
        const effect = async () =>{
            const my_token = await localStorage.getItem("jwt");
            Utility.SetToken(my_token);

            //add course for each classId in registration list
            props?.registration?.forEach(async (element) => {
                var course_id = element.classId;
                const course = await Utility.CourseGet(course_id).then(res=> res.data);
                
                setCourses(prev=>({...prev,[element.classId]:course}));
                  /*  document.getElementById(element.classId).secondary = "For "+element.courseName+" course";
                }).catch(err=> console.log(err.message));*/
            });
        }
        effect();
    },[]);
    return <>
    <Typo variant='h2'>Registrations</Typo>
    <List>
        {props.registration?.map(e=>{
            return <>
            <ListItem key={e.registrationId}>
                <ListItemText id={e.classId} primary={<Link to={"/profile/student/"+e.studentId}>{`From student ${e.studentId}`}</Link>} secondary={`For ${courses[e.classId]?.courseName || e.classId} course`}/>
                <ListItemText primary={"Status: "+e.status}/>
            {props.isTutor && <Button color="success" name={e.registrationId} onClick={acceptStudent} sx={style} alignItems="center">Accept</Button>}
            <Button color="error" name={e.registrationId} onClick={rejectStudent} sx={style} alignItems="center">{props.isTutor?"Reject":"Cancel"}</Button>
            </ListItem>
            <Divider/></>
        })}
    </List>
    <p>{JSON.stringify(courses)}</p>
    </>
} export default Registration;