import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";



export default function Dictionary() {
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null);
    
    function handleKeywordChange(event) {
        console.log(event.target.value);
        setKeyword(event.target.value);
    }


    function search(event) {
      event.preventDefault();

      let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
      axios.get(apiUrl).then(handleResponse);
    }

    function handleResponse(response) {
        console.log(response.data);
        setResults(response.data[0]);
        
    }

    return (
        <div className="Dictionary">
        <form onSubmit={search}>
          <input type="search" onChange={handleKeywordChange} autoFocus={true} placeholder="Please type a word..."/>
        </form>
        <Results results={results}/>
        </div>
    );
}
