import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";



export default function Dictionary() {
    let [keyword, setKeyword] = useState("");
    
    function handleKeywordChange(event) {
        console.log(event.target.value);
        setKeyword(event.target.value);
    }


    function search(event) {
      event.preventDefault();
      alert(`Searching for ${keyword}`);

      let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
      axios.get(apiUrl).then(handleResponse);
    }

    function handleResponse(response) {
        console.log(response.data);
        return "The definition of a cat is"
    }

    return (
        <div className="Dictionary">
        <form onSubmit={search}>
          <input type="search" onChange={handleKeywordChange} autoFocus={true} placeholder="Please type a word..."/>
        </form>
        </div>
    )
}