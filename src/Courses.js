import './App.css';
//import Modal from '@mui/material/Modal';
//import Box from '@mui/material/Box';
import {List, ListItem, Divider, ListItemText, Button,  Typography as Typo,Accordion,AccordionSummary, AccordionDetails,Card, Modal, TextField} from '@mui/material';
import { useLoaderData, useNavigate } from "react-router-dom";
import * as React from 'react';
import Utility from './Utility';

function Courses(props){
    const courses = props?.courses;
    console.log(props);
    
    return <List>
        {courses?.map(e=>(<><ListItem key={e.courseId}><ListItemText primary={e.courseName} secondary={`There are ${e.students?.length} students in this class`}/><ListItemText  secondary={`Starts at: ${e.startDate} Ends at: ${e.endDate}`}/>{props.isTutor&& <Button>Register</Button>}</ListItem><Divider /></>))}
    </List>

} export default Courses;