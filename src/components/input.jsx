import React from 'react';
import './input.css';

export const Input = (props) =>(
    <textarea className = "input" maxLength="9" defaultValue={props.input}>  
    </textarea>
);

export default Input;