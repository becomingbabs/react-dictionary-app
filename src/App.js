import './App.css';
import Dictionary from "./Dictionary"; 
import React from "react";
import tardis from "./tardis.png";  

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="app-header">
            <img src={tardis} className="tardis" alt="tardis" />
            <h1>TARDictionary</h1>
        </header>
        <main>
          <Dictionary defaultKeyword="doctor" />
        </main>
          <footer className="app-footer">
            <a
              href="https://github.com/becomingbabs/react-dictionary-app"
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
