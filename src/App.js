import exampleimage from './components/gratitude-bg-option1-withtext.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={exampleimage} className="App-logo" alt="example image" />
        <p>
          Edit <code>src/App.js</code> and save to change this something.
        </p>
        <a
          className="App-link"
          href="https://monty.net/gratitude"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gratitude card
        </a>
      </header>
    </div>
  );
}

export default App;
