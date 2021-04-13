import React, { Component } from 'react';
import './equalButton.css';

class EqualButton extends Component{
    render(){
        return(
            <div className = "eq-btn" onClick={this.props.addVal}>
                {this.props.children}
            </div>
        );
    }
};
export default EqualButton;