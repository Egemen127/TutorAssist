import {useNavigate, Link, } from "react-router-dom";
import { Typography as Typo } from "@mui/material";
import "./Forum.css";

function Navbar(props) {
    const style = {
        display:"flex",
        justifyContent:"space-evenly",
        alignItems:"center"

    };
    const handleClick = ()=>{
        localStorage.removeItem("jwt");
        localStorage.removeItem("username");
    };

    return<navbar style={style}><Typo variant="h3">Hello {localStorage.getItem("username")}</Typo><button>My Messages</button><button>My Profile</button><Link to="../forum"><button>Forum</button></Link><Link onClick={handleClick} to="../"><button>Logout</button></Link></navbar>
} export default Navbar