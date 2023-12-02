import React from "react";
import "./Phonetic.css";


export default function Phonetic(props) {
    return (
      <span className="Phonetic">
          {props.phonetic.audio ? (
            <a 
         href={props.phonetic.audio}
         target="_blank"
          rel="noopener noreferrer">
          <i class="fa-solid fa-volume-high"></i>
        </a>
          ) : null}
        <span className="text">{props.phonetic.text} </span>
      </span>
    );
} 
