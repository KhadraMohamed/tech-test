import React from "react";
import { useState } from "react";
import getImages from "../requests/getImages";
import "../styles/search.css";

const Search = () => {
    const [value, setValue] = useState();
    const handleSubmit = (event) => {
      event.prevemntDefault();
      getImages(value);
    };
    
    return (
      <>
         <form className="search-form" onSubmit={handleSubmit}>
           <input 
           className="search-input" 
           type="text" 
           onChange={(e) => setValue(e.target.value)}
           />
           <button className="search-btn" type="submit">
            Go!
            </button>
            </form>
        </>
    );
};

export default Search;