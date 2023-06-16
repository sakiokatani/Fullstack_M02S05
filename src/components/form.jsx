import React from "react";
import Button from './buttons'
import Input from './inputfield'

import '../styles/form.css'
import '../styles/buttons.css'

function Form(){
    const placeholder=["Nome","Email", "Telefone"]
    return(
        <div className="container">
            <h1 className="signup">Cadastre-se!</h1>
            <div className="input">
                <Input className="userInput" placeholder ={placeholder[0]}/>
                <Input className="userInput" placeholder ={placeholder[1]}/>
                <Input className="userInput" placeholder ={placeholder[2]}/>
            </div>
            <div className="buttons">
                <Button prop1='Enviar'/>
            </div>
        </div>
    );
}

export default Form;