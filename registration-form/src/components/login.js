import {Link } from "react-router-dom";
import "./login.css";
import React,{ useState } from "react";
// import {database} from '../Firebase'
// import {ref,push,child,update, getDatabase} from "firebase/database";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  function HandleChange(e) {
    if (e.target.id === "email") {
      setEmail(e.target.value);
      if(e.target.value!==""){
        document.getElementById("emailErr").textContent = "";
      }
      else{
        document.getElementById("emailErr").textContent = "**Required";
      }
    }
    if (e.target.id === "pswd") {
      setPassword(e.target.value);
      if(e.target.value!==""){
        document.getElementById("pswdErr").textContent = "";
      }
      else{
        document.getElementById("pswdErr").textContent = "**Required";
      }
    }
  }

  function HandleSubmit(e) {
    e.preventDefault();
  }
  let LoginData={
    email:email,
    password:password,
    userName: ''
  }
  function HandleErrors() {
    if (email === "" || password === "") {
      document.getElementById("emailErr").textContent = "**Required";
      document.getElementById("pswdErr").textContent = "**Required";
      alert("Please fill all the fields!!");
    }
      else{
        let loggedin=0;
        let SignedUpData = JSON.parse(localStorage.getItem("signUp"));
        for(let i=0;i<SignedUpData.length;i++){
        if (
          (SignedUpData[i]["email"] ===
            email) &&
          (SignedUpData[i]["password"] ===
            password)
        ) {
          loggedin=1;
          LoginData.userName=SignedUpData[i].name;
      }
    }
    if(loggedin===1){
      alert("login successful!!");
      localStorage.setItem("login",JSON.stringify(LoginData));
      window.location.href='/viewPage';
    }
    else{
    
      alert("Pls check if the details are correct!");
    }
   
    }
  }
  return (
    <div className="container">
      <h1 className="heading">Please login to peep in!!</h1>
      <form className="form-container" onSubmit={HandleSubmit}>
        <label htmlFor="email" className="label">
          Email id :
        </label>
        <input
          type="email"
          id="email"
          className="input"
          value={email}
          onChange={HandleChange}
        />
        <p className="req" id="emailErr"></p>

        <label htmlFor="pswd" className="label">
          Password :
        </label>
        <input
          type="password"
          id="pswd"
          className="input"
          value={password}
          onChange={HandleChange}
        />
        <p className="req" id="pswdErr"></p>

        <button className="submit-button" type="submit" onClick={HandleErrors}>
          Log in
        </button>
        <div className="footer">
          New user?
          <Link to="/signup">
            <button className="noborder-button">Sign Up</button>
          </Link>
        </div>
      </form>
    </div>
  );
}
export default Login;
