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

    // Rating Feature const NB
    const [showRatingModal, setShowRatingModal] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState(null);

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
    },[nav]); // NB added nav as a dependency

    // Rating Feature Start NB
        const openRatingModal = (course) => {
        setSelectedCourse(course);
        setShowRatingModal(true);
    };

    const closeRatingModal = () => {
        setShowRatingModal(false);
    };

    const handleRatingSubmit = (rating, review) => {
        console.log('Course:', selectedCourse.courseName, 'Rating:', rating, 'Review:', review);
        // Implement logic to process rating and review
        closeRatingModal();
    };
    // Rating Feature End NB

 
    return <div style={{textAlign:"center"}}>
        <Navbar />
    <Typo variant='h1'>{student.firstName} {student.lastName}</Typo>
    <Typo variant='subtitle1'>{student.email}</Typo>
    <Typo variant='h2'>Courses</Typo>
    <Courses courses={student.courses} isTutor={false}/>

    // Rating Feature Return Start NB 
               {showRatingModal && (
                <RatingInput 
                    course={selectedCourse}
                    onClose={closeRatingModal} 
                    onSubmit={handleRatingSubmit} 
                />
            )}
    // Rating Feature Return End NB
   
    {/*Passing the user to display their info in the message box*/}
    <MessageBox user={student}/>
    </div>

} export default StudentProfile
