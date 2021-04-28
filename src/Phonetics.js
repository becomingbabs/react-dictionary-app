import React from "react";
import "./Phonetics.css"; 

export default function Phonetics(props) {
    return (
        <div className="Phonetics">
          <div className="text">{props.phonetics.text}</div>
          <div>
          <audio controls src={props.phonetics.audio}>
                Your browser does not support the
                <code>audio</code> element.
           </audio>
          </div>
        </div>
    ); 
}