import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";




export default function Dictionary(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos] = useState(null);

    
    
    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    function handleSubmit (event) {
        event.preventDefault();
        search();
    }

    function search() {
      let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
      axios.get(apiUrl).then(handleDictionaryResponse);   

      let pexelsApiKey =  "563492ad6f917000010000016c2ae044f1b4422099dc49bbf1e17ef1";
      let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
      let headers = { Authorization: `Bearer ${pexelsApiKey}` };
      axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
    }

    function handleDictionaryResponse(response) {
        setResults(response.data[0]);
        setLoaded(true);
    }

    function handlePexelsResponse(response) {
        setPhotos(response.data.photos);
    }

    if (loaded===true) {
      return (
        <div className="Dictionary">
          <section>
            <form onSubmit={handleSubmit}>
              <input
                type="search"
                onChange={handleKeywordChange}
               placeHolder="Please type a word..."
                
              />
            </form>
          </section>
          <Results results={results} /> 
          <Photos photos={photos} />
        </div>
      );
    } else {
        search();
        return "Loading...";
    } 

}      