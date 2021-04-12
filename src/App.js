import React, { Component } from 'react';
import './App.css';
import  Button  from './components/button.jsx';
import  Input  from './components/input.jsx';
import EqualButton from './components/equalButton.jsx';
import ClearButton from './components/ClearButton.jsx';

class App extends Component {
    constructor(props){
        super(props);

        this.state ={
            input: ""
        }
    }
    render() {
        return (
            <div className="app">
                <div className="calc-container">
                    <Input input={this.state.input}></Input>
                    <div className="row">
                        <ClearButton handleClear={()=>this.setState({input: ""})}>C</ClearButton>
                        <Button>+/-</Button>
                        <Button>%</Button>
                        <Button>÷</Button>
                    </div>
                    <div className="row">
                        <Button>7</Button>
                        <Button>8</Button>
                        <Button>9</Button>
                        <Button>x</Button>
                    </div>
                    <div className="row">
                        <Button>4</Button>
                        <Button>5</Button>
                        <Button>6</Button>
                        <Button>-</Button>
                    </div>
                    <div className="row">
                        <Button>1</Button>
                        <Button>2</Button>
                        <Button>3</Button>
                        <Button>+</Button>
                    </div>
                    <div className="row">
                        <div className="empty"></div>
                        <Button>0</Button>
                        <Button>.</Button>
                        <EqualButton>=</EqualButton>
                    </div>
                </div>
            </div>
        );
    }
};

export default App;
