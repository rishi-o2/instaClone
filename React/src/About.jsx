import react from "react";
import reactdom from "react-dom";
import "./index.css";

 const About = ()=>{

    return (
        <>
            <div className="home">
            <div className="row">
    <div className="col s12 m7">
      <div className="card">
      <h6 style={{textAlign:"center"}}>Rishi</h6>
        <div className="card-image">
          <img className="image" src="https://images.unsplash.com/photo-1682687218147-9806132dc697?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=775&q=80"/>
          
        </div>
        <div className="card-content">
        <i class="material-icons" style={{color:"red"}}>favorite</i>
          <p>Mountains....</p>
          <input type="text" placeholder="Add comment"/>
        </div>
        
      </div>
    </div>
  </div>

            </div>

            <div className="home">
            <div className="row">
    <div className="col s12 m7">
      <div className="card">
      <h6>Rishi</h6>
        <div className="card-image">
          <img className="image" src="https://images.unsplash.com/photo-1682687218147-9806132dc697?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=775&q=80"/>
          
        </div>
        <div className="card-content">
        <i class="material-icons" style={{color:"red"}}>favorite</i>
          <p>Mountains....</p>
          
          <input type="text" placeholder="Add comment"/>
        </div>
        
      </div>
    </div>
  </div>

            </div>
        </>
    )


 }
 export default About;