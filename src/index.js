import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

function goToPage() {
    var page = document.getElementById('page').value;
//        var bgimage = "https://files.outfit.io/media_library_items/349583/gratitude-bg-option2.png"
    var bgimage = document.querySelector('input[name="backgroundimage"]:checked').value;
//        window.location = "https://cdn.make.cm/make/s/montymeme?data%5Btext%5D=" + page;
//        window.location = "https://cdn.make.cm/make/s/grat06?&data[headline]=" + page;
    window.location = "https://cdn.make.cm/make/s/grat07?&data[headline]=" + page + "&data[backgroundImage]=" + bgimage;
}
