import './App.css';

function App() {
  return (
    <div className="App">
    <div class="container">
    <img class="exampleimage" src="https://files.outfit.io/media_library_items/349582/gratitude-bg-option1-withtext.png" />
        <div>

              <div class="row">
                <div class="column"><input type="radio" name="backgroundimage" value="https://files.outfit.io/media_library_items/349584/gratitude-bg-option1.png" checked />Option 1</div>
                <div class="column"><input type="radio" name="backgroundimage" value="https://files.outfit.io/media_library_items/349583/gratitude-bg-option2.png" />Option 2</div>
              </div>

    <input type="text" maxlength="60" id="page" class="text-field" placeholder="Enter message here (60 characters maximum)" onfocus="this.placeholder = ''" />
        </div>

        <div>
            <input type="submit" class="submit-button" value="submit" onclick="goToPage(); displayText();" />
        </div>
    <div id="smalltext"></div>
    </div>
    </div>
  );
}

export default App;
