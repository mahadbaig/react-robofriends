import React from "react";

const Scroll = (props) =>{
    return(
        <div style={{overflowY: 'scroll' , height: '650px' , border:'5px solid #FF725C'}}>
            {props.children}
        </div>
    )
}

export default Scroll;