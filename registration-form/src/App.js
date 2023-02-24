import { BrowserRouter,Switch,Route } from "react-router-dom";
import "./App.css";
import Login from "./components/login";
import Signup from "./components/SignUp";
import ViewPage from "./components/ViewPage";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
        <Switch>
          <Route exact path="/" element={<Signup/>}/>
          <Route exact path="signup" element={<Signup/>}/>
          <Route exact path="login" element={<Login/>}/>
          <Route exact path="viewPage" element={<ViewPage/>}/>
        </Switch>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;