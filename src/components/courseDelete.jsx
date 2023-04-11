import React, {Component} from "react";
import { Route, Switch, Redirect, Link } from "react-router-dom";

import queryString from "query-string";
import http from "./httpService.js";
class CourseDelete extends Component{
state={data:{},


};
   
   async componentDidMount(){
       const {id}=this.props.match.params;
       let response = await http.deleteApi(`/svr/students/${id}`);
       this.props.history.push("/students");
    }
   
    render(){
     return "";
    }

}
export default CourseDelete;