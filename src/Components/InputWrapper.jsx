import React, { useState } from "react";

function InputWrapper({setSearch}) {
  const [input , setInput] =useState('')
  return (
    <nav className="title-input-wrapper">
      <img src="./logo.png" alt="Pokemon logo" className="main-logo" />
      <img src="./char.png" alt="Pokemon logo" className="char" />
      <div>
        <input className="search-input" placeholder="Search your Pokemon" onChange={(e) =>setInput((e.target.value))}/>
        <button className="search-button" onClick={()=>{setSearch(input);setInput('')}}>Search</button>
      </div>
    </nav>
  );
}

export default InputWrapper;
