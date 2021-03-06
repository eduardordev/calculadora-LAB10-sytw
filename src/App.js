import React, { Component } from 'react';
import './App.css';
import  Button  from './components/button.jsx';
import  Input  from './components/input.jsx';
import EqualButton from './components/equalButton.jsx';
import ClearButton from './components/ClearButton.jsx';
import * as math from "mathjs";

class App extends Component {
    constructor(props){
        super(props);

        this.state ={
            input: "",
            op:"",
            x1: "",
            x2:"",
            result:"",
        };
    }

    addInput(val){
        this.setState({ input: this.state.input + val });
    }

    isEqualTo(){
        this.setState({ input: math.evaluate(this.state.input) });
    }

    render() {
        return (
            <div className="app">
                <div className="calc-container">
                    <Input input={this.state.input}></Input>
                    <div className="row">
                        <ClearButton handleClear={() => this.setState({ input: "",x1:"",x2:"",op:"",result:"" })}>C</ClearButton>
                        <Button addVal={()=>this.setState({input: math.evaluate("-1 * " + this.state.input)})}>+/-</Button>
                        <Button addVal={()=>this.setState({op: "%",x1:this.state.input,input: ""})}>%</Button>
                        <Button addVal={()=>this.setState({op: "/",x1:this.state.input,input: ""})}>÷</Button>
                    </div>
                    <div className="row">
                        <Button addVal={()=>this.setState({input: this.state.input + 7})}>7</Button>
                        <Button addVal={()=>this.setState({input: this.state.input + 8})}>8</Button>
                        <Button addVal={()=>this.setState({input: this.state.input + 9})}>9</Button>
                        <Button addVal={()=>this.setState({op: "*",x1:this.state.input,input: ""})}>x</Button>
                    </div>
                    <div className="row">
                        <Button addVal={()=>this.setState({input: this.state.input + 4})}>4</Button>
                        <Button addVal={()=>this.setState({input: this.state.input + 5})}>5</Button>
                        <Button addVal={()=>this.setState({input: this.state.input + 6})}>6</Button>
                        <Button addVal={()=>this.setState({op: "-",x1:this.state.input,input: ""})}>-</Button>
                    </div>
                    <div className="row">
                        <Button addVal={()=>this.setState({input: this.state.input + 1})}>1</Button>
                        <Button addVal={()=>this.setState({input: this.state.input + 2})}>2</Button>
                        <Button addVal={()=>this.setState({input: this.state.input + 3})}>3</Button>
                        <Button addVal={()=>this.setState({op: "+",x1:this.state.input,input: ""})}>+</Button>
                    </div>
                    <div className="row">
                        <Button addVal={()=>this.setState({input: this.state.input + 0})}>0</Button>
                        <Button  addVal={()=>this.setState({input: this.state.input + '.'})}>.</Button>
                        <EqualButton addVal={()=>this.setState({input:math.evaluate(this.state.x1+this.state.op+this.state.input)})}>=</EqualButton>
                    </div>
                </div>
            </div>
        );
    }
};

export default App;
