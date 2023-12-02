import axios from "axios";

const base_url = "http://localhost:8080/";

class Utility {
    TutorGetTutors(){
       return axios.get(base_url+"tutor/getTutors");
    };
    
    TutorGetTutor(id){
       return axios.get(base_url+"tutor/get/"+id);
    };

    //gets the courses by tutor id
    TutorGetCourses(id){
        return axios.get(base_url+"tutor/getCourses/"+id);
    }

    StudentGetStudents(){
        return axios.get(base_url+"student/getStudents");
    }

    StudentGetStudent(id){
        return axios.get(base_url+"student/get/"+id);
    }
    
} 
export default new Utility();