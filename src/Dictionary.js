import React, { useState } from "react"; 
import './Dictionary.css';
import axios from "axios"; 
import Results from "./Results"; 

export default function Dictionary(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword); 
    let [results, setResults] = useState(null); 
    let [loaded, setLoaded] = useState(false); 

    function handleResponse(response) {
        console.log(response.data[0]); 
        setResults(response.data[0]); 

    }

    function search() {
        //  documentation: https://dictionaryapi.dev/
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`; 
        axios.get(apiUrl).then(handleResponse); 
    }

    function handleSubmit(event) {
        event.preventDefault(); 
        search(); 
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value); 
    }

    function load() {
        setLoaded(true); 
        search(); 
    }

    if (loaded) {
        return (
            <div className="Dictionary">
                <h2>
                    Which word do you want to look up? 
                </h2>
                <form onSubmit={handleSubmit}>
                    <input type="search" autoFocus={true} 
                    placeholder="Search the Dictionary" 
                    onChange={handleKeywordChange}
                    defaultValue={props.defaultKeyword} 
                    />
                </form>
                <Results results={results} />
                <div>
                    <p>
                        By Barbara Jandernoa
                    </p>
                </div>
            </div>
        );
    } else {
        load(); 
        return "Loading..."; 
    }
}


