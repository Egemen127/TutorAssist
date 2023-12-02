import './App.css';
//import Modal from '@mui/material/Modal';
//import Box from '@mui/material/Box';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import {List, Divider, ListItem, Button, ListItemText,Card,  Typography as Typo,Accordion,AccordionSummary, AccordionDetails} from '@mui/material';
import { useLoaderData,useLocation } from "react-router-dom";
import * as React from 'react';
import Utility from './Utility';
import MessageBox from './MessageBox';

function Dashboard(props) {
    const { state } = useLocation();
    const [tutors,setTutors] = React.useState([]);
    const [courses,setCourses] = React.useState({});
    const [filters,setFilters] = React.useState({});
    const [visibility,setVisibility] = React.useState(true);
    const sendMessage = (e)=>{
        alert("sending message to "+e.target.name);
    };
    React.useEffect(()=>{
        const effect = async ()=>{
        console.log("use effect triggered");
        //getting the tutors
        const res = await Utility.TutorGetTutors().then(res=>{setTutors(res.data); return res.data;});
        
        //getting courses for tutors
        res.forEach(async e=> {
            var tutorId = e.tutorId;
            await Utility.TutorGetCourses(tutorId).then(res=>{
                setCourses(prev => ({...prev,[tutorId]:res.data}));
                console.log(res);
            });
        });
        
        setTimeout(()=>{ setVisibility(false)}, 3000);
        }

        effect();
        //setCourses();
    }
    ,[]);

    const handleChange = (e)=> {
        //console.log(e.target.name + "  " + e.target.value);
        //console.log(filters);
        setFilters(prev => ({...prev,[e.target.name]:e.target.value}));
         //filter by tutor
         //setTutors(prev => prev.filter(e=> `${e.firstName} ${e.lastName}` === filters["tutor_name"]));

        }

    const filterCourse = (course,course_name= filters["course_name"], student_name = filters["student_name"])=> {
        if(course_name?.length > 3){
            return course.courseName.toLowerCase().includes(course_name.toLowerCase());
        }

        if(student_name?.length > 3){
            return course.students.map(e=> e.firstName +" "+e.lastName).join(" ").toLowerCase().includes(student_name.toLowerCase());
        }

        return true;
    }

    const filterTutorCourses = (tutor_id)=>{
        var ret = courses[tutor_id]?.filter(f=> filterCourse(f))?.length;
        console.log(ret)
        return ret;
    };
        
    const data = useLoaderData();
    //console.log(data); .map(f=><Card> JSON.stringify(f)</Card>{JSON.stringify(courses[e.tutorId].map(c=>c.courseId))}
    return <>
    {visibility && state &&<div>
                <span className="close"><strong>Message!</strong></span>
                {state.error?.map((e)=><p>{e}</p>)}
            </div>}
    <div className='App-Header'><h1>Hello {data.var}</h1></div>
    <div><input className='input-field' onChange={handleChange} placeholder="Course Name" name="course_name" value={filters["course_name"]}></input>
        <input className='input-field' onChange={handleChange} placeholder="Tutor Name" name="tutor_name" value={filters["tutor_name"]}></input>
        <input className='input-field' onChange={handleChange} placeholder="Student Name" name="student_name" value={filters["student_name"]}></input>
    </div>
    <div>
        {tutors.filter(f=> {if(filters["tutor_name"]?.length > 3)return `${f.firstName} ${f.lastName}`.toLowerCase().includes(filters["tutor_name"].toLowerCase()); else return true;}).map(e=> 
            { 
                if(filterTutorCourses(e.tutorId)==0) return;
                 return (<Accordion key = {e.tutorId} elevation ={15} style= {{"text-align":"center"}}>
            <AccordionSummary
          expandIcon={<ExpandMoreIcon />}><Typo variant='h2'>
            <a href={"/profile/tutor/"+ e.tutorId}>
            {e.firstName} {e.lastName}
            </a></Typo>
        <hr/>
        <Typo variant='p'>Studied at {e.college} Majored in {e.major}</Typo>
        <hr/>
        <Typo variant='p'>Click to display courses</Typo>
        </AccordionSummary>
        <AccordionDetails>
          <Typo variant='h4'>Course list:</Typo> {courses[e.tutorId]?.filter(f=> filterCourse(f)).map(c=>(<Card elevation={(c.courseId % 2 == 0)?10:15}><Typo>{c.courseName} starting at {c.startDate}</Typo>
          <br/>
          <Typo>Students</Typo>
          <List>
            {c.students.map(e=> <>
                <ListItem style= {{"text-align":"center"}}>
                <a href={"/profile/student/"+e.studentId}><ListItemText primary={`${e.firstName} ${e.lastName}`} secondary={e.email}/></a>
                <ListItemText primary={e.gender} secondary={`Born in ${e.birthdate}`}/>
                <MessageBox user ={e}/>
                </ListItem>
                <Divider/>
                </>)}
          </List>
          </Card>))}
          </AccordionDetails>
        </Accordion>)})}
    </div>
    </>
}

export default Dashboard;
