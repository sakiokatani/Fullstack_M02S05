import React from "react";
import '../styles/main.css'

function Main() {
    return (
      <div className="main">
        <MyComponent showText={true}/>
      </div>
    );
}

const userName = prompt("Qual seu nome?");

function MyComponent(props){
    if(props.showText){
        return(
            <h1>Hello {userName}!</h1>
        ) 
    }
    return false;
}
  export default Main;