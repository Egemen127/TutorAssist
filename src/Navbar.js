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

    return <navbar style={style}><Link to={"../userdash/"+localStorage.getItem("username")}><Typo variant="h3">Hello {localStorage.getItem("username")}</Typo></Link><button>My Messages</button><Link to="../myProfile"><button>My Profile</button></Link><Link to="../forum"><button>Forum</button></Link><Link onClick={handleClick} to="../"><button>Logout</button></Link></navbar>
} export default Navbar