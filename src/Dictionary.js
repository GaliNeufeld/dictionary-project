import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";



export default function Dictionary(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);

    
    
    function handleKeywordChange(event) {
        console.log(event.target.value);
        setKeyword(event.target.value);
    }

    function handleSubmit (event) {
        event.preventDefault();
        search();
    }

    function search() {
      let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
      axios.get(apiUrl).then(handleResponse);   
    }

    function handleResponse(response) {
        setResults(response.data[0]);
        setLoaded(true);
        
    }
    
    if (loaded===true) {
      return (
        <div className="Dictionary">
          <section>
            <form onSubmit={handleSubmit}>
              <input
                type="search"
                onChange={handleKeywordChange}
                autoFocus={true}
                placeholder="Please type a word..."
              />
            </form>
          </section>
          <Results results={results} />
        </div>
      );
    } else {
        search();
        return "Loading...";
    } 

}      