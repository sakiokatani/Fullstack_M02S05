import React, {useState, useEffect} from "react";
import '../styles/main.css'
import Form from './form'

function Main() {
  const [showComponent, setShowComponent] = useState(true);

  useEffect(() => {
    if (showComponent) {
      const timer = setTimeout(() => {
        setShowComponent(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showComponent]);

  return (
    <div>
      {showComponent && <MyComponent showText={true} />}
      {!showComponent && <Form />}
    </div>
  );
  }

const userName = prompt("Qual seu nome?");

function MyComponent(props){
    if(props.showText){
        return(
            <h1 className="greetings">Hello {userName}!</h1>
        ) 
    }
    return false;
}

  export default Main;