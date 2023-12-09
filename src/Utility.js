import axios from "axios";

const base_url = "http://localhost:8080/";

class Utility {
    SetToken(token){
        axios.defaults.headers.common = {'Authorization': `Bearer ${token}`};
    };
    Authenticate(request) {
        return axios.post(base_url+"jwt/authenticate",request);
    };
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

    MessageSendMessage(request){
        return axios.post(base_url+"messsage/create/",request);
    }
    
    TutorCreate(request){
        return axios.post(base_url+"tutor/create/",request);
    }

    StudentCreate(request){
        return axios.post(base_url+"student/create/",request,);
    }

    MyProfile(){
        return axios.get(base_url+"jwt/myProfile/");
    }
} 
export default new Utility();