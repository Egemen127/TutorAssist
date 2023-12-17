import {useState,useEffect} from "react";
import './App.css';
import {Button, Typography as Typo, TextField,Dialog,DialogActions,DialogContent,DialogTitle} from '@mui/material';
import Utility from "./Utility";
function CreateCourse(){
    useEffect(()=>{
        const my_effect = async () => {
            const my_token = await localStorage.getItem("jwt");
            Utility.SetToken(my_token);
        };

        my_effect();
    },[]);
     //useState to keep current user info
    var [tutor,setTutor] = useState({});
    var [formData,setFormData] = useState({courseName:"",startDate:"",endDate:""});
    var [open,setOpen] = useState(false);
    var [courseOpen,setCourseOpen] = useState(false);
    const handleOpen = (e)=>{
        if(e.target.name=="create-course") {
            setCourseOpen(true);
        }
    }
    const closeModal = () => {
        setCourseOpen(false);
    };
    const handleSubmit = () =>{
        alert(JSON.stringify(formData));
        Utility.CourseCreate(formData)
        .then(res=> alert(res.code+" course is created!"))
        .catch(err=> alert(err.code+" "+err.message));
    }
    const handleChange = (e) => {
        setFormData(prev=>({...prev,[e.target.name]:e.target.value}));
    }
    return <><Button name="create-course" onClick={handleOpen}>Create Course</Button>
    <Dialog open={courseOpen}> 
      <DialogTitle>Create Course</DialogTitle>
      <DialogContent>
        <form>
           <TextField autoFocus margin="normal" type="text"  id="course_name" name="courseName" onChange={handleChange} fullWidth label="Course Name" variant="standard"  value={formData.courseName}/>
           <TextField margin="normal"  label="Start Date" type="date" id="start_dt" name="startDate" onChange={handleChange} fullWidth  variant="outlined" value={formData.startDate}/>
            <TextField margin="normal" label="End Date" type="date" id="end_dt" name="endDate" onChange={handleChange} fullWidth  variant="outlined" value={formData.endDate}/>
         </form>
      </DialogContent>
      <DialogActions>
          <Button onClick={handleSubmit}>Submit</Button>
          <Button onClick={closeModal}>Cancel</Button>
      </DialogActions>
    </Dialog></>;
} export default CreateCourse;