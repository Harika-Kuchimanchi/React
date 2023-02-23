import { useState } from "react";
import "./App.css";
import Login from "./components/Login";
import Signup from "./components/SignUp";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  function toogleScreen() {
    setIsLogin(isLogin=>!isLogin);
  }
  return (
    <div className="App">
      <header className="App-header">
        {isLogin?<Login /> : <Signup/>}
        <div style={!isLogin? {} : {display: 'none'}}>
          Existing user!!
          <button className="noborder-button" onClick={toogleScreen}>
            Login
          </button>
        </div>
        <div style={isLogin? {} : {display: 'none'}}>New user? <button className="noborder-button" onClick={toogleScreen}>Rigister</button></div>
      </header>
    </div>
  );
}

export default App;