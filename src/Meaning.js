import React from "react"; 
import Synonyms from "./Synonyms"; 
import Example from "./Example"; 
import "./Meaning.css"; 

export default function Meaning(props) {
    console.log(props.meaning); 
    return (
        <div className="Meaning">
            <h3>{props.meaning.partOfSpeech}</h3>
            {props.meaning.definitions.map(function (definition, index) 
            {
                return (
                    <div className="word-entry" key={index}> 
                        <div className="definition">
                            {definition.definition} {" "}
                        </div>
                        <br/>
                        <Example example={definition.example} /> 
                        <br/>
                        <Synonyms synonyms={definition.synonyms} /> 
                    </div>
                ); 
            })}
        </div>
    ) 
}