import React, {Component} from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
class Front extends Component{
    render(){
        return(
 <div className="container">
    <h3>componentDidUpdate</h3>
    <p>componentDidUpdate() is invoked immediately after updating occurs. This method is 
        not called for initial render
    </p>
    {/* <h3>ComponentDidMount</h3>
    <p>compopnentDidMount() is invoked immediately after a component is mounted (inserted 
        into the tree).</p>
    <h3>Network tab in Chrome</h3>
    <li>Go to networks tab in inspect in Chrome browser</li>
    <li>Display the network requests with the corresponding response</li>
    <li>Powerful tool to debug HTTP related issues</li>
   <h3>Postman</h3>
    <p>Postman is an API platform for building, testing and using APIs. 
        It has ability to make various types of HTTP requests(GET,POSt,PUT).
    </p>
   <h3>POST</h3>
<p> sends data to the server to create a resource</p>
<p>POST/productApp/products - the data sent to the server is stored in the body of the request</p>

  <h3>GET</h3>
    <p> request data from the server for the specified resource</p>
    <p>GET/productsApp/products it sends the data for all products as an array</p>
  
   <h3>REST API</h3>
<p>Rest API allows connection between different parts of an applications.</p>
<h6>Types of REST APIs</h6>
<li>GET: request data from the server for the specified resource</li>
<li>POST: sends data to the server to create a resource.</li>
<li>PUT: used to update a resource</li>
<li>DELETE: Used to delete a resource</li>



   <h3>Front End</h3>
   <p>Front-end is the browser UI seen by the user. The front-end fetches data from the 
    back-end by calling the back-end services or API.
   </p>
   <h3>Back End</h3>
   <p>Back-end reffers to as a server stores the data. The back end responds to the requests
    sent by the front-end and send requisite data.
        </p>
      <h6>Request means the front-end fetches data from the 
    back-end by calling the back-end services or API.</h6>  
    <h6>Response means the back end responds to the requests
    sent by the front-end and send requisite data.</h6>
    <h3>API</h3>
  <p>API(Application Programming Interface) - it defines the kinds of requests that can be
    made, how to make them, the data formats to be followed etc.
        </p>*/}
            </div>
        )
    }
}
export default Front;