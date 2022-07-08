import React from "react";
import Synonyms from "./Synonyms"; 
import "./Definitions.css";

export default function Definitions(props) {
    function displayExample(item) {
        if (item) {
            return (
               <span>
                <strong>Example:</strong> {item}
               </span> 
            );
        } else {
            return null;
        }
    }
   
    return (
        <div className="Definitions">
         <h3>{props.meaning.partOfSpeech}</h3>
          {props.meaning.definitions.map(function(definition, index)
          {
            return (
            <div key={index}>
               <div className="definition">
                 {definition.definition}
               </div>  
               <div className="example"> 
                 {displayExample(definition.example)}
               </div>   
                <Synonyms synonyms={definition.synonyms} />
              </div>
            );
          })}
        </div>
       );
    }
