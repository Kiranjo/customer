import React, {Component} from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import queryString from "query-string";
import http from "./httpService.js";
import { Link } from "react-router-dom";
class Person extends Component{
    state={person:{}};
    async componentDidMount(){
        let {id}=this.props.match.params;
        let response=await http.get(`/personApp/persons/${id}`);
        console.log(response);
        let {data}=response;
        this.setState({person :data});
    }
    render(){
        let {person}=this.state;
        let {id}=this.props.match.params;
        return(
            <div className="container">
                <h4>Details of Person</h4>
                Id: {person.id}<br/>
                Name: {person.name}<br/>
                Age: {person.age}<br/>
                City: {person.city}<br/>
                Company: {person.company}<br/>

                <Link to={`/persons/${id}/delete`}>Delete</Link>
                <Link to={`/persons/${id}/edit`}>Edit</Link>
       
            </div>
        )
    }

}
export default Person;