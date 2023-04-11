import React, {Component} from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Link } from "react-router-dom";

import queryString from "query-string";
import http from "./httpService.js";

class RlifeCycle extends Component{
    state ={
        counter:0,
     };
      
         render(){
        
                  return(
        <div className="container">
         <h3>componentDidUpdate</h3>
        <p>componentDidUpdate () receives the former props and state as arguments
 . Typically used to make API calls after comparing the current and previous
     props and state. setState() can be used here but within a conditional statement.
       <li>If setState is called without comparison it will not trigger 
        a re-render and React will not display those changes in state </li>        
               
                  </p>   

      {/*  <h4>Parameters passed to componentDidUpdate</h4>
        <p>Two parameters prevState and prevProps are passed to 
            componentDidUpdate()
                  </p>*/}





      {/*  <h3>shouldComponentUpdate</h3>
        <p>shouldComponentUpdate() method returns a true or false, i.e., should 
            a component update or not. By defalut a component will always
            re-render when updated. It is used for performance optimization.
           <br/> Typically used to make API calls after comparing the current and previous
             props and state. setState() can be used here but within a conditional statement
        </p>*/}




      {/*  <h3>componentWillUnmount</h3>
        <p>componentWillUnmount() is invoked immediately before a component 
            is unmounted and destroyed. Perform any necessary cleanup in this 
            method such as invalidating timers, canceling network requests, or
            cleaning up any subscriptions that were created in componentDidMount.
                  </p>*/}




       {/* <h3>componentDidUpdate</h3>
        <p>componentDidUpdate () receives the former props and state as arguments
            . Typically used to make API calls after comparing the current and previous
             props and state. setState() can be used here but within a conditional statement.
                  </p>*/}





       {/* <h3>componentDidMount</h3>
        <p> componentDidMount make API calls and update the components 
            state based.
            The componentDidMount() method allows us to execute the
           react code when the component is already placed in the 
           DOM. This method is called during the mounting phase of the 
           React Life-cycle after the component is rendered.</p>*/}





      {/*  <h3>Stages In React Component Lifecycle</h3>
        <p>There are three stages in React component lifecycle</p>
        <li>Mounting</li>
        <li>Updating</li>
                  <li>Unmounting</li>*/}
            
             </div>
         
           
                  )
              }
}
export default RlifeCycle;