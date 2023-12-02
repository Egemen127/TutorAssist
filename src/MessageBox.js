import {Card, TextField, Button, Divider,Modal } from "@mui/material";
import * as React from "react";
import './App.css';

function MessageBox(props){
    
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
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
    
    return <><Button onClick={handleOpen}>Send a message to {props.user.firstName} {props.user.lastName}</Button>
    <Modal open={open}  onClose={handleClose} >
        <Card style={style} component="form">
            <TextField
            id="outlined-multiline-static"
            label="Message"
            multiline
            rows={4}
            defaultValue="Type your message"
            />
            <Divider/>
            <Button style={{margin:'auto'}}>Send</Button>
        </Card>
        </Modal>
        </>
} export default MessageBox