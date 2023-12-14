import Utility from "./Utility";
import  {useEffect,useState} from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { Typography as Typo} from "@mui/material";
import ChatHistory from "./ChatHistory";

function MyMessages(){
    const [messages,setMessages] = useState([]);
    
    const [userInfo,setUserInfo] = useState({});
    const nav= useNavigate();

    useEffect(()=>{ 
        const effect = async ()=>{ 
            const my_token = await localStorage.getItem("jwt");
            Utility.SetToken(my_token);
            const res = await Utility.MessageAllMessages().then(res=> res.data).catch(err=>{alert(err.code+" "+err.message+". Navigating to home page");nav("/");});
            //processing the message data
            var processed_data={};
            var processed_data_arr=[];
            var user_info={};
            var my_id;
            if(res.sent)
            my_id = res.sent[0].senderId;
            else
             my_id = res.recieved[0].receiverId;

            //adding current user to the list
            await Utility.StudentGetStudent(my_id).then(res=>{user_info[my_id]=res.data}).catch(err=> Utility.TutorGetTutor(my_id).then(res=>{user_info[my_id]=res.data}));

            for (let index = 0; index < res.sent.length; ++index){
                var user_id = res.sent[index].receiverId;
                console.log(res.sent[index]);

                if(user_id in processed_data) {
                    processed_data[[user_id]].push(res.sent[index]);
                }
                else {
                    processed_data[[user_id]] = [];
                    processed_data[[user_id]].push(res.sent[index]);

                    await Utility.StudentGetStudent(user_id).then(res=>{user_info[user_id]=res.data}).catch(err=> Utility.TutorGetTutor(user_id).then(res=>{user_info[user_id]=res.data}));
                }
            }
            for (let index = 0; index < res.recieved.length; ++index) {
                var user_id = res.recieved[index].senderId;
                console.log(res.recieved[index]);
                if(user_id in processed_data)
                    processed_data[[user_id]].push(res.recieved[index]);
                else {
                    processed_data[[user_id]] = [];
                    processed_data[[user_id]].push(res.recieved[index]);

                    await Utility.StudentGetStudent(user_id).then(res=>{user_info[user_id]=res.data}).catch(err=> Utility.TutorGetTutor(user_id).then(res=>{user_info[user_id]=res.data}));
                }
            }
             const objectComparisonCallback = (arrayItemA, arrayItemB) => {
            if (arrayItemA.messageId < arrayItemB.messageId) {
                return -1
            }

            if (arrayItemA.messageId > arrayItemB.messageId) {
                return 1
            }

            return 0
            }

            if(processed_data) {
                for (let [key, value] of Object.entries(processed_data)) {
                    processed_data_arr.push({userId:key,correspondence:value.sort(objectComparisonCallback)});
                }
                setMessages(processed_data_arr);
                setUserInfo(user_info);
            }
          //  console.log(processed_data);
           // console.log(user_info);
        }
        effect();
    },[]);
    return (<>
        <Navbar/>
        <ChatHistory chat={messages} user_info={userInfo}/>
    </>);
} export default MyMessages