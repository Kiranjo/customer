import React, {Component} from "react";
import { Route, Switch, Redirect, Link } from "react-router-dom";

import queryString from "query-string";
import http from "./httpService.js";
import PersonOptionCb from "./personOptionCb.jsx";
class CustomerDelete extends Component{
state={data:{},


};
   
   async componentDidMount(){
       const {id}=this.props.match.params;
       let response = await http.deleteApi(`/customers/${id}`);
       this.props.history.push("/customers");
    }
   
    render(){
     return "";
    }

}
export default CustomerDelete;