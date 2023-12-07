import {Card, TextField, Button, Divider,Modal } from "@mui/material";
import * as React from "react";
import './App.css';
import Utility from "./Utility";

function MessageBox(props){
    
    const user = props.user;
    let user_id = "";
    if("college" in user)
        user_id= "tutorId";
    else
        user_id ="studentId";

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {setOpen(true);}
    const handleClose = () => {
        if(window.confirm("Closing the message box."))
        setOpen(false);};

    //todo: add get sender id from current context once authentication is implemented
    const handleSend = async () => {
        await Utility.MessageSendMessage({receiverId:user[user_id],content:document.getElementById("outlined-multiline-static").value}).then(res=> {
            alert("message is sent: "+JSON.stringify(res.data,0,2) );
            setOpen(false);
        }).catch(err =>{
                 alert(err.message);
                 console.log(err);
                setOpen(false);
            });

    };
    
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        padding:'10px',
        transform: 'translate(-50%, -50%)',
        width: 'fit-parent',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };
    
    return <><Button onClick={handleOpen}>Send a message to {user.firstName} {user.lastName}</Button>
    <Modal open={open}  onClose={handleClose} >
        <Card style={style} component="form">
            <TextField
            id="outlined-multiline-static"
            label={"To "+ user.firstName +" "+user.lastName}
            multiline
            rows={4}
            defaultValue="Type your message"
            />
            <Divider/>
            <Button style={{margin:'auto'}} onClick={handleSend}>Send</Button>
        </Card>
        </Modal>
        </>
} export default MessageBox