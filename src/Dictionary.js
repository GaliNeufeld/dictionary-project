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

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function search() {
      let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}&per_page=3`;
      axios.get(apiUrl).then(handleDictionaryResponse);   

      let apiKey = "303b041t9dc7c1ce08f4ao48696a7fa8";
      let pexelsApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${apiKey}`;
      
      axios.get(pexelsApiUrl).then(handleImagesResponse);
    }

    function handleDictionaryResponse(response) {
        setResults(response.data[0]);
        setLoaded(true);
    }

    function handleImagesResponse(response) {
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