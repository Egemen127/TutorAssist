import './App.css';
import {Typography as Typo} from '@mui/material';
import { useLoaderData, useNavigate,useLocation } from "react-router-dom";
import * as React from 'react';
import Utility from './Utility';
import Courses from './Courses';
import MessageBox from './MessageBox';
import Forum from './Forum';
import Navbar from './Navbar';
import RatingInput from './RatingInput'; 

function StudentProfile(){
    var data = useLoaderData();
    var nav = useNavigate();
    var location = useLocation();

    const [student,setStudent] = React.useState({});
    React.useEffect(()=>{
        const my_effect = async ()=>{
            const my_token = await localStorage.getItem("jwt");
            Utility.SetToken(my_token);
            Utility.StudentGetStudent(data.id).then(res=> setStudent(res.data))
            .catch(err=>{ 
                alert(err.code+" "+err.message+".Navigating to homepage.")
                nav("/");
            });
        }

        my_effect();
    },[]);

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
    
    return <div style={{textAlign:"center"}}>
        <Navbar />
    <Typo variant='h1'>{student.firstName} {student.lastName}</Typo>
    <Typo variant='subtitle1'>{student.email}</Typo>
    <Typo variant='h2'>Courses</Typo>
    <Courses courses={student.courses} isTutor={false}/>
    {/*Passing the user to display their info in the message box*/}
    <MessageBox user={student}/>
    </div>

    // Rating Feature Return
    <div className="profile">
      <h1>Welcome to Your Profile</h1>
      {/* Clickable rating option */}
      <button onClick={openModal}>Rate Courses/Tutors</button>
      {/* Show the rating modal when showModal state is true */}
      {showModal && (
        <RatingModal onClose={closeModal} onSubmit={handleRatingSubmit} />
      )}
      {/* Other profile content */}
    </div>
  );
};
    // End of Rating Feature Return 
} export default StudentProfile
