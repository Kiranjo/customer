import React, {Component} from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import queryString from "query-string";
import http from "./httpService.js";


class Student extends Component{
    state={data:[],
   
    
    }
    async componentDidMount(){
        let {id}=this.props.match.params;
        let response=await http.get(`/svr/students/${id}`);
        console.log(response);
        let {data}=response;
        this.setState({data :data});
    }
    render(){
        let {data}=this.state;
        let {id}=this.props.match.params;
        return(
            <div className="container">
                <h4>Details of Student</h4>
                Id: {data.id}<br/>
                Name: {data.name}<br/>
                Course: {data.course}<br/>
                Grade: {data.grade}<br/>
                City: {data.city}<br/>

               <Link className="m-1" to={`/students/${id}/delete`}>Delete</Link>
                <Link className="m-1" to={`/students/${id}/edit`}>Edit</Link>
       
            </div>
        )
    }


}
export default Student;