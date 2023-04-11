import React, {Component} from "react";
import { Route, Switch, Redirect, Link } from "react-router-dom";

import queryString from "query-string";
import http from "./httpService.js";
import PersonOptionCb from "./personOptionCb.jsx";
class DeletePerson extends Component{
state={data:{},


};
   
   async componentDidMount(){
       const {id}=this.props.match.params;
       let response = await http.deleteApi(`/personApp/persons/${id}`);
       this.props.history.push("/persons");
    }
   
    render(){
     return "";
    }

}
export default DeletePerson;