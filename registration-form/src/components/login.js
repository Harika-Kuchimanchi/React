import React from 'react';
import './signup.css';
import {useState} from 'react';
// import {database} from '../Firebase'
// import {ref,push,child,update, getDatabase} from "firebase/database";


function Login(){

    const [email, setEmail] = useState();
    const [password,setPassword] = useState();
function HandleChange(e){ 
    if(e.target.id==="email"){
        setEmail(e.target.value);
    
    }
    if(e.target.id==="pswd"){
        setPassword(e.target.value);
    }
}

function HandleSubmit(e){
    e.preventDefault();
}
function HandleErrors(){
    if(email===undefined|| password===undefined){
        document.getElementById("emailErr").textContent="**Required";
        document.getElementById("pswdErr").textContent="**Required";
        alert("Please fill all the fields!!")
     }
}
    return(
        <div className="container">
            <form className="form-container" onSubmit={HandleSubmit}>

                    <label htmlFor="email" className="label" >Email id :</label>
                    <input type="email" id="email" className="input" value={email} onChange={HandleChange}/>
                    <p className="req" id="emailErr"></p>

                    <label htmlFor="pswd" className="label" >Password :</label>
                    <input type="password" id="pswd" className="input" value={password} onChange={HandleChange}/>
                    <p className="req" id="pswdErr"></p>

                    <button className="submit-button" type="submit" onClick ={HandleErrors}>Sign in</button>
            </form>
        </div>
    );
    }
    export default Login;