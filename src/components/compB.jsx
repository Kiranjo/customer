import React, {Component} from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Link } from "react-router-dom";

import queryString from "query-string";
import http from "./httpService.js";

class CompB extends Component{
    state ={
        counter:0,
     };
       increment=()=>{
         this.setState({counter: this.state.counter+1});
       };
     
      componentDidMount(){
    const {counter}=this.state;
    const {name}=this.props.match.params;
  console.log(`BBBB : componentDidMount : counter=${counter} name=${name}`);
      }
      componentDidUpdate(prevProps,prevState){
        const {counter}=this.state;
        const {name}=this.props.match.params;
      console.log(`BBBB : componentDidUpdate : counter=${counter} name=${name}`);
      if(prevProps.match.params.name !== name){
        this.setState({counter:0});
      } 
      }
      componentWillUnmount(){
        const {counter}=this.state;
    const {name}=this.props.match.params;
         console.log(`BBBB : componentWillUnmount:  counter=${counter} name=${name}`);
      }
      shouldComponentUpdate(prevProps,prevState){
        const {counter}=this.state;
        const {name}=this.props.match.params;
         console.log(`BBBB : shouldComponentUpdate : counter=${counter} name=${name}`);
         return true;
      }
     
     
     
         render(){
        const{counter}=this.state;
        const {name}=this.props.match.params;
        console.log(`BBBB : render :  counter=${counter} name=${name}`);
                  return(
          <div className="container bg-danger text-dark">
             Component BBBB <br/>
             Counter : {counter}
             <button className="btn btn-success btn-sm ml-3"
             onClick={()=>this.increment()}>Increment</button>
             <br/>
             name:{name}    
            
             </div>
         
           
                  )
              }
}
export default CompB;