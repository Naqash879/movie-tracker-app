<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
=======
import logo from "./logo.svg";
import "./App.css";
import Login from "./Login.js";
function App() {
  return (
    <>
      <Login />
    </>
>>>>>>> 5001c609f16f6a274aa69d9a0f7b38be189b4250
  );
}

export default App;
