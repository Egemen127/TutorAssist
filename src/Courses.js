import './App.css';
import {List, ListItem, Divider, ListItemText, Button } from '@mui/material';
import { useEffect } from 'react';
import Utility from './Utility';
function Courses(props){
    useEffect(()=>{
        const my_effect = async () => {
            const my_token = await localStorage.getItem("jwt");
            Utility.SetToken(my_token);
        };
        my_effect();
    },[]);

    const handleRemove = (e)=>{
        if(props.myProfile){
         Utility.CourseDelete(e.target.name).then(res=> alert(res.data)).catch(err=> alert(err.message));
        } else
        alert("todo: add remove for student & register logic!");
    }
    const courses = props?.courses;

    return <List>
        {courses?.map(e=>(<><ListItem key={e.courseId}><ListItemText primary={e.courseName} secondary={e.students?.length? `There are ${e.students?.length} students in this class`: "  "}/><ListItemText  secondary={`Starts at: ${e.startDate} Ends at: ${e.endDate}`}/>{props.isTutor&& <Button name={e.courseId} onClick={handleRemove}>{props.myProfile?"Remove":"Register"}</Button>}</ListItem><Divider /></>))}
    </List>

} export default Courses;