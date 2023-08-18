import react from "react";
import App from "./App";
import Navbar from "./Navbar"
import reactdom from "react-dom";
import {BrowserRouter, Routes, Route,} from 'react-router-dom';


reactdom .render(
    <>
    
        <BrowserRouter><App/></BrowserRouter>
    </>, document.getElementById("root")
)