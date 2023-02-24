import React from "react";
import { Link } from "react-router-dom";
import "./signup.css";
import { useState } from "react";
// import {database} from '../Firebase'
// import {ref,push,child,update, getDatabase} from "firebase/database";

const Signup = () => {
  const [FullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function HandleChange(e) {
    if (e.target.id === "name") {
      setFullName(e.target.value);
      if (e.target.value === "") {
        document.getElementById("nameErr").textContent = "**Required";
      } else {
        document.getElementById("nameErr").textContent = "";
      }
    }
    if (e.target.id === "email") {
      setEmail(e.target.value);
      if (e.target.value === "") {
        document.getElementById("emailErr").textContent = "**Required";
      } else {
        document.getElementById("emailErr").textContent = "";
      }
    }
    if (e.target.id === "pswd") {
      setPassword(e.target.value);
      if (e.target.value === "") {
        document.getElementById("pswdErr").textContent = "**Required";
      } else {
        document.getElementById("pswdErr").textContent = "";
      }
    }
    if (e.target.id === "cnfrmpswd") {
      setConfirmPassword(e.target.value);
      if (e.target.value === "") {
        document.getElementById("cnfrmpswdErr").textContent = "**Required";
      } else {
        document.getElementById("cnfrmpswdErr").textContent = "";
      }
    }
  }

  function HandleSubmit(e) {
    e.preventDefault();
  }

  function HandleErrors() {
    if (
      FullName === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      document.getElementById("nameErr").textContent = "**Required";
      document.getElementById("emailErr").textContent = "**Required";
      document.getElementById("pswdErr").textContent = "**Required";
      document.getElementById("cnfrmpswdErr").textContent = "**Required";
      alert("Please fill all the fields!!");
    }
    if (
      password !== confirmPassword &&
      password.length !== confirmPassword.length
    ) {
      document.getElementById("cnfrmpswdErr").textContent =
        "*Password is incorrect";
    }
    if (
      password === confirmPassword &&
      password !== "" &&
      confirmPassword !== ""
    ) {
      document.getElementById("cnfrmpswdErr").textContent = "Looks good";
    }
    if (
      FullName !== "" &&
      email !== "" &&
      password !== "" &&
      confirmPassword !== ""
    ) {
      signUp();
    }
  }

  function signUp() {
    let signUpData = {
      name: FullName,
      email: email,
      password: password,
    };
    let localData = [];
    localData = JSON.parse(localStorage.getItem("signUp")) || [];
    if (localData.length === 0) {
      localData.push(signUpData);
      localStorage.setItem("signUp", JSON.stringify(localData));
    } else {
      let exists = 0;
      for (let i = 0; i < localData.length; i++) {
        if ((localData[i]["email"] === email)){
          alert("User already exists, please login");
          exists = 1;
        }
      } 
      if (exists === 1) {
       window.location.href = '/login';
      } else {
        localData.push(signUpData);
        localStorage.setItem("signUp", JSON.stringify(localData));
        alert("Registered Succesfully");
      }
    }
  }

  return (
    <div className="container">
      <h1 className="heading">Step ahead by creating your Account!</h1>
      <form className="form-container" onSubmit={HandleSubmit}>
        <label htmlFor="name" className="label">
          Full name :
        </label>
        <input
          type="text"
          id="name"
          className="input"
          value={FullName}
          onChange={HandleChange}
        />
        <p className="req" id="nameErr"></p>

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

        <label htmlFor="cnfrmpswd" className="label">
          Confirm Password :
        </label>
        <input
          type="password"
          id="cnfrmpswd"
          className="input"
          value={confirmPassword}
          onChange={HandleChange}
        />
        <p className="req" id="cnfrmpswdErr"></p>

        <button className="submit-button" type="submit" onClick={HandleErrors}>
          Sign Up
        </button>
        <div className="footer">
            Already have an account?<Link to="/login">
            <button className="noborder-button">Login</button>
            </Link>
        </div>
      </form>
    </div>
  );
};
export default Signup;
