import React, {Component} from "react";
import { Route, Switch, Redirect, Link } from "react-router-dom";
import queryString from "query-string";
import http from "./httpService.js";
class ShowSport extends Component{
    state={star:{}};
    async componentDidMount(){
        let {id}=this.props.match.params;
        let response=await http.get(`/sporticons/details/${id}`);
        console.log(response);
        let {data}=response;
        this.setState({star :data});
    }
    render(){
        let {star}=this.state;
        let {details={}}=star;
     console.log(details);
     
        return(
            <div className="container">
                <h4>{star.name}</h4>
               
              <h6>Date of Birth: {details.dob}</h6>
              <h6> Sport: {star.sport}</h6>
              <h6>Country: {star.country}</h6>
            <h6>{details.info}</h6> 
              <h6><Link to ={`/sporticons/stars`}>{star.sport} Stars</Link></h6> 
       
            </div>
        )
    }

}
export default ShowSport;