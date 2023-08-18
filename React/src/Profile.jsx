import react from "react";
import reactdom from "react-dom";
import "./index.css"
 const Profile = ()=>{

    return (
        <>
            <div style={{maxWidth:"550px", margin:"0px auto"}}>
                <div style={{
                    display:"flex",
                    justifyContent:"space-around",
                    margin:"18px 0px",
                    borderBottom:"1px solid grey"
                    

                }}>
                    <div>
                        <img style={{width:"160px", height:"160px",borderRadius:"80px"}}
                        src="https://images.unsplash.com/photo-1610024062303-e355e94c7a8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
                        />
                    </div>
                    <div >
                        <p >Rishi Singh Gharwal</p>
                        <div style={{display:"flex", justifyContent:"space-between", width:"200px"}}>
                            <p>post</p>
                            <p>following</p>
                            <p>followers</p>
                        </div>
                    </div>
                </div>
                <div className="gallery">
                <img className="item" src = "https://images.unsplash.com/photo-1553658024-39485fea1f16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80"/>
                <img className="item" src = "https://images.unsplash.com/photo-1553658024-39485fea1f16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80"/>

                <img className="item" src = "https://images.unsplash.com/photo-1553658024-39485fea1f16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80"/>

                <img className="item" src = "https://images.unsplash.com/photo-1553658024-39485fea1f16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80"/>



                </div>
            </div>
        </>
    )


 }
 export default Profile;