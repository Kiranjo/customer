import React, {Component} from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Link } from "react-router-dom";

import queryString from "query-string";
import http from "./httpService.js";

class CompA extends Component{
    state ={
   counter:0,
};
  increment=()=>{
    this.setState({counter: this.state.counter+1});
  };

 componentDidMount(){
    console.log(`AAA : componentDidMount : counter= ${this.state.counter}`);
 }
 componentDidUpdate(prevProps,prevState){
    console.log(`AAA : componentDidUpdate : counter= ${this.state.counter}`);
 }
 componentWillUnmount(){
    console.log(`AAA : componentWillUnmount: counter= ${this.state.counter}`);
 }
 shouldComponentUpdate(prevProps,prevState){
    console.log(`AAA : shouldComponentUpdate : counter= ${this.state.counter}`);
    return true;
 }



    render(){
   const{counter}=this.state;
   console.log(`AAA : render : counter= ${this.state.counter}`);
             return(
     <div className="container bg-warning text-dark">
        Component AAAA <br/>
        Counter : {counter}
        <button className="btn btn-danger btn-sm ml-3"
        onClick={()=>this.increment()}>Increment</button>
            
       
        </div>
    
      
             )
         }
}
export default CompA;