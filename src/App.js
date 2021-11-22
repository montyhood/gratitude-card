import logo from './components/gratitude-bg-option1-withtext.png';
import './App.css';
import './main.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <div class="row">
          <div class="column"><input type="radio" name="backgroundimage" value="https://files.outfit.io/media_library_items/349584/gratitude-bg-option1.png" checked />Option 1</div>
          <div class="column"><input type="radio" name="backgroundimage" value="https://files.outfit.io/media_library_items/349583/gratitude-bg-option2.png" />Option 2</div>
        </div>

        <input type="text" maxlength="60" id="page" class="text-field" placeholder="Enter message here (60 characters maximum)." onfocus="this.placeholder = ''" />

            <div>
                <input type="submit" class="submit-button" value="submit" onclick="displayText();" />
            </div>
        <div id="smalltext"></div>

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
