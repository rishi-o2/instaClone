import React from "react"
import Login from "./Login";
import Profile from "./Profile";
import Signup from "./Signup";
import About from "./About";
import Post from "./Post"
import {BrowserRouter,Routes,  Route,useNavigate} from 'react-router-dom';
import Navbar from "./Navbar"
import { createContext,useContext,useEffect,Switch,useReducer } from "react";
import Userprofile from "./Userprofile";
import {useDispatch} from "react-redux";
import Myfollowers from "./myfollowers";



import {reducer,initialState} from './Reducers/useReducers'

export const UserContext = createContext()
const Routing = ()=>{
    const navigate = useNavigate()
    const {state,dispatch} = useContext(UserContext)
    useEffect(()=>{
      const user = JSON.parse(localStorage.getItem("user"))
      if(user){
        dispatch({type:"USER",payload:user})
        navigate("/Profile")
        
      }else{
        navigate("/login")
        
      }
    },[])

 return(
     
     <Routes>
          <Route exact path="/" About></Route>
           <Route exact path="/about" Component={About}></Route>
          <Route exact path="/signup" Component={Signup}></Route>
          <Route exact path="/Profile" Component={Profile}></Route>
          <Route exact path="/login"    Component = {Login}></Route>
          <Route exact path="/createpost"    Component = {Post}></Route>
          <Route exact path = "/Profile/:id" Component={Userprofile}></Route>
          <Route exact path = "/myfollowers" Component={Myfollowers}></Route>

     </Routes>
     
)
}
function App(){
    const [state,dispatch] = useReducer(reducer,initialState)
  return (
    <UserContext.Provider value={{state,dispatch}}>
    <BrowserRouter>
      <Navbar />
      <Routing/>
      
    </BrowserRouter>
    </UserContext.Provider>
  );
}
export default App;
