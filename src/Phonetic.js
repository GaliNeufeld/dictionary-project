import React from "react";


export default function Phonetic(props) {
    console.log(props.phonetic);
    return (
      <div className="Phonetic">
        <a href={props.phonetic.audio} target="_blank" rel="noreferrer noopener">
          <i class="fa-solid fa-volume-high"></i>
        </a>
        <br />
        {props.phonetic.text}
      </div>
    );
} 