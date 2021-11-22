import logo from './components/gratitude-bg-option1-withtext.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          App will be live shortly.
        </p>
        <a
          className="App-link"
          href="https://monty.net/gratitude"
          target="_blank"
          rel="noopener noreferrer"
        >
          Demo
        </a>
      </header>
    </div>
  );
}

export default App;
