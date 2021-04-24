import './App.css';
import Dictionary from "./Dictionary"; 
import React from "react"; 

function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          <img src="https://afternoah.com/media/12440/size/category-sub-header" className="lingo-globe" alt="globe"></img>
          <h1>Lingo Look-up</h1>
        </header>
        <main>
          <Dictionary defaultKeyword="peace" />
        </main>
      </div>
    </div>
  );
}

export default App;
