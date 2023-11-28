import './App.css';
//import Modal from '@mui/material/Modal';
//import Box from '@mui/material/Box';
import {List, ListItem, Divider, ListItemText, Button,  Typography as Typo,Accordion,AccordionSummary, AccordionDetails,Card, Modal, TextField} from '@mui/material';
import { useLoaderData, useNavigate } from "react-router-dom";
import * as React from 'react';
import Utility from './Utility';


function TutorProfile(){
    var data = useLoaderData();
    var nav = useNavigate();
    var [tutor,setTutor] = React.useState({});
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        padding:'10px',
        transform: 'translate(-50%, -50%)',
        width: 'fit-parent',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };
    
    React.useEffect(
        ()=>{
            Utility.TutorGetTutor(data.id)
            .then(res=> setTutor(res.data))
            .catch(data=>{ nav("/userdash/test",{state:{error:["Something went wrong with the request. Navigating to the dashboard."]}}); console.log("Something went wrong with the request. Navigating to the dashboard."); console.log(data)}); //navigate to an error page

            Utility.TutorGetCourses(data.id)
            .then(res=> setTutor(prev=>{return {...prev,courses:res.data}}))
            .catch(data=>{ nav("/userdash/test",{state:{error:["Something went wrong with the request. Navigating to the dashboard."]}}); console.log(); console.log(data)});
        },[]
    );
    
    return <div style={{textAlign:"center"}}>
    <Typo variant='h1'>{tutor.firstName} {tutor.lastName}</Typo>
    <Typo variant='subtitle1'>{tutor.email}</Typo>
    <Typo variant='p'>Graduated from {tutor.college} Majored in {tutor.major}, {tutor.degreeType}</Typo>
    <Typo variant='h2'>Courses</Typo>
    <List>
        {tutor.courses?.map(e=>(<><ListItem><ListItemText primary={e.courseName} secondary={`There are ${e.students.length} students in this class`}/><ListItemText  secondary={`Starts at: ${e.startDate} Ends at: ${e.endDate}`}/><Button>Register</Button></ListItem><Divider /></>))}
    </List>
    <Button onClick={handleOpen}>Send a message to tutor</Button>
    <Modal open={open}  onClose={handleClose} >
        <Card style={style} component="form">
            <TextField
            id="outlined-multiline-static"
            label="Message"
            multiline
            rows={4}
            defaultValue="Type your message"
            />
            <Divider/>
            <Button style={{margin:'auto'}}>Send</Button>
        </Card>
    </Modal>
    </div>
} export default TutorProfile