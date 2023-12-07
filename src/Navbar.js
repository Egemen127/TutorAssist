import {useNavigate, Link, } from "react-router-dom";
import { Typography as Typo } from "@mui/material";
import "./Forum.css";

function Navbar(props) {
    const style = {
        display:"flex",
        justifyContent:"space-evenly",
        alignItems:"center"

    }
    return<navbar style={style}><Typo variant="h3">Hello {props.username}</Typo><button>My Messages</button><button>My Profile</button><Link to="../"><button>Logout</button></Link></navbar>
} export default Navbar