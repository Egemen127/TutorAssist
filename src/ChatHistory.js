import {List, ListItem, ListItemText, Divider} from "@mui/material";
import MessageBox from "./MessageBox";

function ChatHistory(props){
    console.log(props.user_info[54]);
    console.log(props.user_info);
    console.log(props.chat);
    return (<>
       
            {props.chat.map(e=> <div>
                 <List>
                    {e.correspondence.map(f=>(
                <ListItem style= {{"textAlign":"center"}} >
                <ListItemText primary={`From ${props.user_info[f.senderId].firstName} To ${props.user_info[f.receiverId].firstName}`} secondary={f.createDt}/>
                <ListItemText primary={`${f.content}`} />
                </ListItem>))}
                <MessageBox user ={props.user_info[e.userId]}/>
                </List>
                <Divider/>
                </div>)}
          
    </>)
} export default ChatHistory;