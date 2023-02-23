import React from 'react';
import './Registration.css'
import {useState} from 'react';
import Login from './login';
// import {database} from '../Firebase'
// import {ref,push,child,update, getDatabase} from "firebase/database";


const Signup= () =>{

    const [FullName, setFullName] = useState();
    const [email, setEmail] = useState();
    const [password,setPassword] = useState();
    const [confirmPassword,setConfirmPassword] = useState();

 
function HandleChange(e){
    if(e.target.id==="name"){
        setFullName(e.target.value);
    }   
    if(e.target.id==="email"){
        setEmail(e.target.value);
    }
    if(e.target.id==="pswd"){
        setPassword(e.target.value);
    }
    if(e.target.id==="cnfrmpswd"){
        setConfirmPassword(e.target.value);
    }

}

function HandleSubmit(e){
    e.preventDefault();
}
function HandleErrors(){
    if(FullName===undefined|| email===undefined|| password===undefined|| confirmPassword===undefined){
        document.getElementById("nameErr").textContent="**Required";
        document.getElementById("emailErr").textContent="**Required";
        document.getElementById("pswdErr").textContent="**Required";
        document.getElementById("cnfrmpswdErr").textContent="**Required";
        alert("Please fill all the fields!!")
     }
    if (password !==confirmPassword && (password.length!==confirmPassword.length)){
        document.getElementById("cnfrmpswdErr").textContent="*Password is incorrect";
    }
    if(password === confirmPassword && (password!==undefined && confirmPassword!==undefined)){
        document.getElementById("cnfrmpswdErr").textContent="Looks good";   
    }
}
    return(
        <div className="container">
            <h3 className="heading">Step ahead by creating your Account!</h3>
            <form className="form-container" onSubmit={HandleSubmit}>
                    <label htmlFor="name" className="label" >Full name :</label>
                    <input type="text" id="name" className="input" value={FullName} onChange={HandleChange}/>
                    <p className="req" id="nameErr"></p>

                    <label htmlFor="email" className="label" >Email id :</label>
                    <input type="email" id="email" className="input" value={email} onChange={HandleChange}/>
                    <p className="req" id="emailErr"></p>

                    <label htmlFor="pswd" className="label" >Password :</label>
                    <input type="password" id="pswd" className="input" value={password} onChange={HandleChange}/>
                    <p className="req" id="pswdErr"></p>

                    <label htmlFor="cnfrmpswd" className="label">Confirm Password :</label>
                    <input type="password" id="cnfrmpswd" className="input" value={confirmPassword} onChange={HandleChange}/>
                    <p className="req incorrect" id="cnfrmpswdErr"></p>

                    <button className="submit-button" type="submit" onClick ={HandleErrors}>Register</button>
            </form>
        </div>
    );
}

export default Signup;