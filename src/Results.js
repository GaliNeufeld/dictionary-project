import React from "react";
import Definitions from "./Definitions";
import Phonetic from "./Phonetic";
import "./Results.css"

export default function Results(props) {
    
    if (props.results) {
        return (
          <div className="Results">
            <section>
              <h2>{props.results.word}</h2>
              {props.results.phonetics.map(function (phonetic, index) {
                return (
                  
                    <span key={index}>
                      <Phonetic phonetic={phonetic} />
                    </span>
                );
              })}
           </section>
            {props.results.meanings.map(function (meaning, index) {
              return (
                <section key={index}>
                  <Definitions meaning={meaning} />
                </section>
              );
            })}
          </div>
        );
    } else {
        return null;
    }
}
