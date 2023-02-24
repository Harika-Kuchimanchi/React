import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/login";
import Signup from "./components/SignUp";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup/>}/>
          <Route path="signup" element={<Signup/>}/>
          <Route path="login" element={<Login/>}/>
        </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;