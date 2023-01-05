import React from "react";

const searchBox = ({searchChange }) =>{
    return(

        <div className="pa2">

        <input 

        type='search' 
        placeholder = 'search robots' 
        className="bg-light-red pa3 mb5 br2 ba b--light-red" 
        onChange={searchChange}

        />

        </div>
    )
}

export default searchBox;