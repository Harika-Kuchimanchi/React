import './App.css';
import Login from './components/login';
import Signup from './components/signup';


function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Signup/>
          <Login/>
      </header>
    </div>
  );
}

export default App;
