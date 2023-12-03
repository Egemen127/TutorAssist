import './App.css';
import {List, ListItem, Divider, ListItemText, Button } from '@mui/material';

function Courses(props){
    const courses = props?.courses;
    console.log(props);
    return <List>
        {courses?.map(e=>(<><ListItem key={e.courseId}><ListItemText primary={e.courseName} secondary={e.students?.length? `There are ${e.students?.length} students in this class`: "  "}/><ListItemText  secondary={`Starts at: ${e.startDate} Ends at: ${e.endDate}`}/>{props.isTutor&& <Button>Register</Button>}</ListItem><Divider /></>))}
    </List>

} export default Courses;