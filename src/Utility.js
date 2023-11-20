import axios from "axios";

const base_url = "http://localhost:8080/";

class Utility {
    TutorGetTutors(){
       return axios.get(base_url+"tutor/getTutors");
    };
    
    //gets the courses by tutor id
    TutorGetCourses(id){
        return axios.get(base_url+"tutor/getCourses/"+id);
    }

    StudentGetStudents(){
        return axios.get(base_url+"student/getStudents");
    }

    
} 
export default new Utility();