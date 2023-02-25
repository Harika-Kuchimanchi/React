import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "./components/common.css";
import Login from "./components/login";
import Signup from "./components/SignUp";
import ViewPage from "./components/ViewPage";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Signup />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/viewPage" element={<ViewPage />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
