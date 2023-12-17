import './App.css';
import {Button, Typography as Typo, TextField,Dialog,DialogActions,DialogContent,DialogTitle} from '@mui/material';
import { useLoaderData, useNavigate, useLocation } from "react-router-dom";
import * as React from 'react';
import Utility from './Utility';
import Courses from './Courses';
import MessageBox from './MessageBox';
import Forum from './Forum';
import Navbar from './Navbar';
import EditProfile from './EditProfile.js';
import RatingInput from './RatingInput'; 
import RatingModal from './RatingInput';
import CreateCourse from './CreateCourse.js';
import Registration from './Registration.js';

function MyProfile(){
    var data = useLoaderData();
    var nav = useNavigate();
    var location = useLocation();
    //useState to keep current user info
    var [tutor,setTutor] = React.useState({});
    var [open,setOpen] = React.useState(false);
    var [courseOpen,setCourseOpen] = React.useState(false);
    var [registration,setRegistration] = React.useState();

    console.log(data);
    React.useEffect(
        ()=>{//don't access useState in useEffect
            const my_effect = async ()=>{
                const my_token = await localStorage.getItem("jwt");
                Utility.SetToken(my_token);
                const res = await Utility.MyProfile()
                .then(res=> {setTutor(res.data);  return res;})
                .catch(err=>{ 
                    alert(err.code+" "+err.message+".Navigating to home page.");
                    nav("/"); 
                }); 

                console.log("me: ");
                console.log(res);
                console.log(tutor.tutorId);
                if("tutorId" in res.data){
                  await Utility.TutorGetCourses(res.data.tutorId)
                  .then(res=> setTutor(prev=>{return {...prev,courses:res.data}}))
                  .catch(data=> {
                      nav("/userdash/test",{state:{error:["Something went wrong with the request. Navigating to userdash."]}});
                  });
                  await Utility.RegisterationAllPending(res.data.tutorId).then(res=> setRegistration(res.data)).catch(err=> alert(err.message));
                }
                else {
                  await Utility.RegisterationAllStudentReg(res.data.studentId).then(res=> setRegistration(res.data)).catch(err=> alert(err.message));
                }
            }

            my_effect();
        },[nav]
    );

    //Rating Feature 
    const MyProfile = () => {
  const [showModal, setShowModal] = React.useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setCourseOpen(false);
  };

  const handleRatingSubmit = (data) => {
    // Handle the submitted rating and comment data here
    console.log('Submitted:', data);
    // Close the modal after submission
    closeModal();
  };
    // End of Rating Feature 
    
    return <><div style={{textAlign:"center"}}>
    <Navbar/>
    <Typo variant='h1'>{tutor.firstName} {tutor.lastName}</Typo>
    <Typo variant='subtitle1'>{tutor.email}</Typo>
    {"tutorId" in tutor && <Typo variant='p'>Graduated from {tutor.college} Majored in {tutor.major}, {tutor.degreeType}</Typo>}
    <Typo variant='h2'>My Courses</Typo>
    <Courses courses={tutor.courses} isTutor={"tutorId" in tutor} myProfile={true}/>
    {/*Passing the user to display their info in the message box*/} 
    <EditProfile user={tutor} isTutor={"tutorId" in tutor}/>
    {/*opens a form for course creation*/}
    {"tutorId" in tutor && <><br/><CreateCourse/></>}
    <Registration registration={registration} isTutor={"tutorId" in tutor}/>
    
    </div>
    <div className="profile">
      <h1>Welcome to Your Profile</h1>
      {/* Clickable rating option */}
      <button onClick={openModal}>Rate Courses/Tutors</button>
      {/* Show the rating modal when showModal state is true */}
      <Dialog open={showModal}>
        <RatingModal onClose={closeModal} onSubmit={handleRatingSubmit} />
      </Dialog>
      {/* Other profile content */}
    </div>
    </>
};
    // End of Rating Feature Return 
  return MyProfile();
} export default MyProfile
