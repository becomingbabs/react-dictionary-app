import React, { useState } from "react"; 
import './Dictionary.css';

export default function Dictionary() {
    let [keyword, setKeyword] = useState(""); 

    function search(event) {
        event.preventDefault(); 
        alert("Searching..."); 
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value); 
    }
    
    return (
        <div className="Dictionary">
            <form onSubmit={search}>
                <input type="search" autoFocus={true} placeholder="Search the Dictionary" onChange={handleKeywordChange} />
            </form>
            <div className="information-block">
                <div className="search-word">
                    <div>
                        <p>
                            Quickly
                        </p>
                        <p>
                            \ 'kwik' - 'ly' \
                        </p>
                    </div>
                    <div>
                        <p>
                            Adverb
                        </p>
                        <p>
                           - acting quick, or fast paced 
                        </p>
                    </div>
                    <div>
                        <p>
                            Synonyms
                        </p>
                        <p>
                           - rapidly, fast, briskly 
                        </p>
                    </div>
                </div>
                <div className="img-block">
                    <img />
                </div>
            </div>
            <div>
                <p>
                    By Barbara Jandernoa
                </p>
            </div>
        </div>
    ); 
}


