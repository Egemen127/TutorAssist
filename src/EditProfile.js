import { useEffect,useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Utility from "./Utility";

function EditProfile(props){
    
  const [open, setOpen] = useState(false);
  const [pwopen, setPwOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handlePwOpen = () => {
    setPwOpen(true);
  };

  const[formData, setFormData] = useState(props.user);
  useEffect(()=>{setFormData(props.user);},[]);

  const handleChange = (e)=>{
    setFormData(prev=>({...prev,[e.target.name]:e.target.value}));
    
    if(e.target.value=="")
    setFormData(prev=>{delete prev[e.target.name];return prev});
  }
  const handleClose = () => {
    setOpen(false);
    setPwOpen(false);
  };
  const submitForm = (e) =>{
    e.preventDefault();
    alert("todo: add submit logic, api needs an update!!Add confirm fields to pw form."+JSON.stringify(formData,0,2));
    return;
    if("tutorId" in props)
        Utility.TutorUpdate(formData);
    else
        Utility.StudentUpdate(formData);
  }
  let formItems=[
    {label:"Email Address",type:"email",id:"edit-email",name:"email"},
    {label:"First Name",type:"text",id:"edit-firstName",name:"firstName"},
    {label:"Last Name",type:"text",id:"edit-lastName",name:"lastName"},
    {label:"Username",type:"text",id:"edit-username",name:"username"},
]
  if(props.isTutor){
    formItems.push({label:"College",type:"text",id:"edit-college",name:"college"});
    formItems.push({label:"Major",type:"text",id:"edit-major",name:"major"});
    formItems.push({label:"Degree Type",type:"text",id:"edit-degreeType",name:"degreeType"});
    formItems.push({label:"Year",type:"date",id:"edit-year",name:"year"});
  } else {
    formItems.push( {label:"Gender",type:"text",id:"edit-gender",name:"gender"});
    formItems.push( {label:"Birth Date",type:"date",id:"edit-birthdate",name:"birthdate"});

  }

  return (
    <>
      <Button onClick={handleClickOpen}>
        Edit Profile
      </Button>
      <Button onClick={handlePwOpen}>
        Change Password
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit Profile</DialogTitle>
        <DialogContent>
            <form method="post" onSubmit={submitForm}>
                {formItems.map((e=><TextField
                margin="dense"
                name = {e.name}
                id={e.id}
                label={e.label}
                type={e.type}
                fullWidth
                variant="standard"
                onChange={handleChange}
                defaultValue={props.user[e.name]}
                value={formData[e.name]}
            />))}
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={submitForm}>Submit</Button>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    <Dialog open={pwopen} onClose={handleClose}>
      <DialogTitle>Change Password</DialogTitle>
      <DialogContent>
        <form>
          <TextField autoFocus margin="normal" type="password" label="test" id="edit_pw" name="password" fullWidth label="New Password" variant="standard"/>
         </form>
      </DialogContent>
      <DialogActions>
          <Button onClick={submitForm}>Submit</Button>
          <Button onClick={handleClose}>Cancel</Button>
      </DialogActions>
    </Dialog>
    </>
  );
}export default EditProfile