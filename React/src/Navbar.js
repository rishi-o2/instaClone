import react from "react";
import reactdom from "react-dom";
import { NavLink } from "react-router-dom";
import "./index.css"
 const Navbar = ()=>{
    return (<nav>
    <div className="nav-wrapper white">
      <NavLink to="/" className="brand-logo">Instagram</NavLink>
      <ul id="nav-mobile" className="right">
        <li><NavLink to="/login">Login</NavLink></li>
        <li><NavLink to="/signup">SignUp</NavLink></li>
        <li><NavLink to="/profile">Profile</NavLink></li>
        <li><NavLink to="/createpost">Post</NavLink></li>
      </ul>
    </div>
  </nav>)
        
 }
 export default Navbar;