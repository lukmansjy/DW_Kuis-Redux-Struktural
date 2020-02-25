import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';

//Import Action
import {actionINC, actionDEC, actionDIVIS, actionMULTIP}  from './_actions/mathA';
import mathR from './_reducers/mathR';

class App extends Component{

  
  render(){
    return(
      <div className="App-header  ">
        <h1>COUNTER</h1>
        <h1>{this.props.mathR.number}</h1>
        <div className="contaianButton">
          <button onClick={() => this.props.dispatch(actionINC())}>INC</button>
          <button onClick={() => this.props.dispatch(actionDEC())}>DEC</button>
          <button onClick={() => this.props.dispatch(actionDIVIS())}>Bagi {this.props.mathR.number}</button>
          <button onClick={() => this.props.dispatch(actionMULTIP())}>kali {this.props.mathR.number}</button>
        </div>
      </div>
    )
  }
}

const mapStateToProp = (state)=>{
  return{
    mathR: state.mathR
  }
}

export default connect(mapStateToProp)(App);
