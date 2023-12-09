import './App.css';
import {List, ListItem, Divider, ListItemText, Button } from '@mui/material';

function Courses(props){
    const handleRemove = ()=>{
        alert("todo: add remove & register logic!");
    }
    const courses = props?.courses;

    return <List>
        {courses?.map(e=>(<><ListItem key={e.courseId}><ListItemText primary={e.courseName} secondary={e.students?.length? `There are ${e.students?.length} students in this class`: "  "}/><ListItemText  secondary={`Starts at: ${e.startDate} Ends at: ${e.endDate}`}/>{props.isTutor&& <Button onClick={handleRemove}>{props.myProfile?"Remove":"Register"}</Button>}</ListItem><Divider /></>))}
    </List>

} export default Courses;