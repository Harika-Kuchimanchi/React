import './App.css';
import AlreadyRegistered from './components/AlreadyRegistred';
import RegistrationPage from './components/Registeration';


function App() {
  return (
    <div className="App">
      <header className="App-header">
          <RegistrationPage/>
          <AlreadyRegistered/>
      </header>
    </div>
  );
}

export default App;
