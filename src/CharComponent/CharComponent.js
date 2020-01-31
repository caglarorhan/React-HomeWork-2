import React from "react";
import "./CharComponent.css"
const charComponent  = (props)=>{


    return(
        <div className="charcomp" onClick={props.click}>{props.letterval}</div>

    )

};

export default charComponent
