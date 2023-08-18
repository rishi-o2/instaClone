import react from "react"
import Login from "./Login";
import Profile from "./Profile";
import Signup from "./Signup";
import About from "./About";
import Post from "./Post"
import {BrowserRouter, Routes, Route,} from 'react-router-dom';
import Navbar from "./Navbar"

function App(){
    return (
        <>
        <Navbar></Navbar>
        <Routes>
         <Route exact path="/" Component={About}></Route>
         <Route exact path="/about" Component={About}></Route>
         <Route exact path="/signup" Component={Signup}></Route>
         <Route exact path="/Profile" Component={Profile}></Route>
         <Route exact path="/login"    Component = {Login}></Route>
         <Route exact path="/createpost"    Component = {Post}></Route>
         

         </Routes>
         </> 
    )
}
export default App;