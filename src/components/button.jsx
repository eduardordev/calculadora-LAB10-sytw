import React, { Component } from 'react';
import './button.css';

const isOperator = val =>{
    return !isNaN(val) || val === "." /*|| val === "="*/ ;
}

class Button extends Component {
    render() {
        return (

            <div className={`button-container ${isOperator(this.props.children) ? null : "operatorButt"}`} onClick={() => this.props.handleClick(this.props.children)}
                onClick={this.props.addVal}
            >
                {this.props.children}
            </div>


        );
    }
};

export default Button;


    
