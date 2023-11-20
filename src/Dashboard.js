import './App.css';
//import Modal from '@mui/material/Modal';
//import Box from '@mui/material/Box';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Card,  Typography as Typo,Accordion,AccordionSummary, AccordionDetails} from '@mui/material';
import { useLoaderData } from "react-router-dom";
import * as React from 'react';
import Utility from './Utility';

function Dashboard(props) {
    const [tutors,setTutors] = React.useState([]);
    const [courses,setCourses] = React.useState({});
    const [filters,setFilters] = React.useState({});
    React.useEffect(()=>{
        const effect = async ()=>{
        console.log("use effect triggered");
        //getting the tutors
        const res = await Utility.TutorGetTutors().then(res=>{setTutors(res.data); return res.data});
        
        //getting courses for tutors
        res.forEach(async e=> {
            var tutorId = e.tutorId;
            await Utility.TutorGetCourses(tutorId).then(res=>{
                setCourses(prev => ({...prev,[tutorId]:res.data}));
                console.log(res);
            });
        });
        }

        effect();
        //setCourses();
    }
    ,[]);

    const data = useLoaderData();
    console.log("tutors: ");
        console.log(tutors);
        console.log("courses: ");
        console.log(courses);
    //console.log(data); .map(f=><Card> JSON.stringify(f)</Card>{JSON.stringify(courses[e.tutorId].map(c=>c.courseId))}
    return <>
    <div className='App-Header'></div>
    <div>
        <h1>Hello test {data.var}</h1>
        {tutors.map(e=><Accordion key = {e.tutorId} elevation ={15} style= {{"text-align":"center"}}>
            <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
        ><Typo variant='h2'>{e.firstName} {e.lastName}</Typo>
        <hr/>
        <Typo variant='p'>Studied at {e.college} Majored in {e.major}</Typo>
        <hr/>
        <Typo variant='p'>Click to display courses</Typo>
        </AccordionSummary>
        <AccordionDetails>
          <Typo variant='h4'>Course_list:</Typo> {courses[e.tutorId]?.map(c=>(<Card elevation={(c.courseId % 2 == 0)?10:15}><Typo>{c.courseName} starting at {new Date(0).setUTCSeconds(c.startDate)}</Typo></Card>))}
          </AccordionDetails>
        </Accordion>)}
    </div>
    </>
}

export default Dashboard;
