import './App.css';
import Dictionary from "./Dictionary"; 
import React from "react"; 

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="app-header">
          <div>
            <img src="tardis.png" className="tardis" alt="Tardis"/>
          </div>
          <div>
            <h1>The Doctor's Dictionary</h1>
          </div>
        </header>
        <main>
          <Dictionary defaultKeyword="doctor" />
        </main>
          <footer className="app-footer">
            <a
              href="https://github.com/becomingbabs/react-weather-app"
              id="open-source-link"
              target="_blank"
              rel="noreferrer"
            >
              <strong>Open source code</strong>{" "}
            </a>
            by Barbara <br/> 👩🏻‍💻 <br/>  Currently located in Santiago, Chile
          </footer>
      </div>
    </div>
  );
}

export default App;
