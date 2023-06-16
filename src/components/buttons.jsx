import React from "react";
import '../styles/buttons.css'

function Button(props){
    return(
    <>
    <button className="submitbtn" onClick={SubmitEvent}>{props.prop1}</button>
    </>
    )
}


export default Button;