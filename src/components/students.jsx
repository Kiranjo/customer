import React, {Component} from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import queryString from "query-string";
import http from "./httpService.js";


class Students extends Component{
    state={data:[],
   
    
    };
        async fetchData(){
            let queryParams = queryString.parse(this.props.location.search);
            let searchStr=this.makeSearchString(queryParams); 
            let response= await http.get(`/svr/students?${searchStr}`);
            console.log(response);
            let {data}=response;
            this.setState({data: data});
        }
        componentDidMount(){
            this.fetchData();
        }
        componentDidUpdate(prevProps,prevState){
            if(prevProps !==this.props) this.fetchData();
        }
        handleOptionChange=(options)=>{
            options.page="1";
            this.callURL("/students",options);
        }
        makeSearchString=(options)=>{
            console.log(options);
            let {city,company,minAge}=options;
            let searchStr="";
      
            searchStr=this.addToQueryString(searchStr,"city",city);
            searchStr=this.addToQueryString(searchStr,"company",company);
            searchStr=this.addToQueryString(searchStr,"minAge",minAge);
            console.log(searchStr);
            return searchStr;
        }
        addToQueryString=(str,paramName,paramValue)=>
        paramValue ? str ? `${str}&${paramName}=${paramValue}`:
        `${paramName}=${paramValue}`:str;
        render(){
          let {data=[]}=this.state;
          let {name}=this.props.match.params;
           let queryParams=queryString.parse(this.props.location.search);
           let data1=name?data.filter((da)=>da.course==name):data;
            return(
                <div className="container">
             <h3>Welcome To The Student Page</h3>
             {data1.map((da)=>(
                      <div className="row">
                <div className="col-2 border">
                <Link to={`/students/${da.id}`}>{da.id}</Link></div>
                <div className="col-2 border">{da.name}</div>
                <div className="col-2 border">{da.course}</div>
                <div className="col-2 border">{da.grade}</div>
                <div className="col-2 border">{da.city}</div>
            <div className="col-1 border">
       <button className="btn btn-warning btn-sm">
       <Link className="m-1 text-dark" to={`/students/${da.id}/edit`}>Edit</Link>
       </button>
            </div>
            <div className="col-1 border">
           
    <button className="btn btn-danger btn-sm">
     <Link className="m-1 text-dark" to={`/students/${da.id}/delete`}>Delete</Link>
    </button>
            </div>
                </div>
            ))}
              
                 
                </div>
                 
            )
        }

}
export default Students;