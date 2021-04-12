import  React from 'react';
import './button.css';

const isOperator = val =>{
    return !isNaN(val) || val === "." || val === "=";
}

const Button = props =>(
    <div className ={`button-container ${
        isOperator(props.children)? null : "operatorButt"
    }`}>{props.children}</div>
)

export default Button;


    
