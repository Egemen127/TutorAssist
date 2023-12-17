import axios from "axios";

const base_url = "http://localhost:8080/";

class Utility {
    SetToken(token){
        axios.defaults.headers.common = {'Authorization': `Bearer ${token}`};
    };
    Authenticate(request) {
        return axios.post(base_url+"jwt/authenticate",request);
    };

    MyProfile(){
        return axios.get(base_url+"jwt/myProfile/");
    }

    CourseCreate(request){
        return axios.post(base_url+"Course/create/",request);
    }

    CourseDelete(courseId){
        return axios.post(base_url+"Course/delete/"+courseId);
    }

    CourseGet(course_id){
        return axios.get(base_url+"Course/get/"+course_id);
    }

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

    TutorCreate(request){
        return axios.post(base_url+"tutor/create/",request);
    }

    TutorUpdate(request) {
        return axios.post(base_url+"tutor/update/",request);
    }

    StudentGetStudents(){
        return axios.get(base_url+"student/getStudents");
    }

    StudentGetStudent(id){
        return axios.get(base_url+"student/get/"+id);
    }

    StudentUpdate(request){
        return axios.post(base_url+"student/update/",request);
    }

    StudentCreate(request){
        return axios.post(base_url+"student/create/",request);
    }
    
    MessageSendMessage(request){
        return axios.post(base_url+"messsage/create/",request);
    }
    
    MessageAllMessages(request){
        return axios.get(base_url+"messsage/allMessages/",request);
    }

    RegisterationRegister(course_id){
        return axios.post(base_url+"registration/register/"+course_id)
    }

    RegisterationAccept(reg_id){
        return axios.post(base_url+"registration/accept/"+reg_id)
    }

    RegisterationReject(reg_id){
        return axios.post(base_url+"registration/reject/"+reg_id)
    }

    RegisterationAllPending(tutor_id){
        return axios.get(base_url+"registration/Allpending/"+tutor_id)
    }

    RegisterationAllStudentReg(student_id){
        return axios.get(base_url+"registration/AllStudentReg/"+student_id)
    }
} 
export default new Utility();