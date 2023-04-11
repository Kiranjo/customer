import React, {Component} from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import queryString from "query-string";
import http from "./httpService.js";
import { Link } from "react-router-dom";
import CustomerLeft from "./customerLeft.jsx";


class CustomerShow extends Component{
    state ={data:[],
};

async fetchData(){
    let queryParams = queryString.parse(this.props.location.search);
    let searchStr=this.makeSearchString(queryParams);
   let response= await http.get(`/customers?${searchStr}`);
    console.log(response);
    let {data}=response;
    this.setState({data: data});
}
componentDidUpdate(prevProps,prevState){
    if(prevProps !==this.props) this.fetchData();
}
componentDidMount(){
    this.fetchData();
}

callURL=(url,options)=>{
    console.log(url);
    console.log(options);
    let searchString=this.makeSearchString(options);
    this.props.history.push({
        pathName: url,
        search: searchString,
    });
}
handleOptionChange=(options)=>{
    this.callURL("/customers",options);
}
makeSearchString=(options)=>{
    console.log(options);
    let {city,gender,payment}=options;
    let searchStr="";
    searchStr=this.addToQueryString(searchStr,"city",city);
    searchStr=this.addToQueryString(searchStr,"gender",gender);
    searchStr=this.addToQueryString(searchStr,"payment",payment);
    console.log(searchStr);
    return searchStr;
}
addToQueryString=(str,paramName,paramValue)=>
paramValue ? str ? `${str}&${paramName}=${paramValue}`:
`${paramName}=${paramValue}`:str;

sort(colNo){
    let s1={...this.state};	
    switch(colNo){
    case 0:s1.data.sort((p1,p2)=>p1.id.localeCompare(p2.id)) ; break;
    case 1:s1.data.sort((p1,p2)=>p1.name.localeCompare(p2.name)); break;
    case 2:s1.data.sort((p1,p2)=>p1.city.localeCompare(p2.city));  break;
    case 3:s1.data.sort((p1,p2)=>(+p1.age)-(+p2.age)); break;
    case 4:s1.data.sort((p1,p2)=>p1.gender.localeCompare(p2.gender)); break;
    case 5:s1.data.sort((p1,p2)=>p1.payment.localeCompare(p2.payment)); break;
    
    }
    this.setState(s1);
}
    render(){
        const {data=[]}=this.state; 
        let {id}=this.props.match.params;
        console.log(data);
        let queryParams=queryString.parse(this.props.location.search);
        return(
            <div className="container">
                <div className="row">
                    <div className="col-3">
   <CustomerLeft options={queryParams} onOptionChange={this.handleOptionChange}/>
                    </div>
        <div className="col-9">
       <h3 className="text-center">Customers Table</h3>
       <div className="row border bg-dark text-white">
            <div className="col-1" onClick={()=>this.sort(0)} >ID</div>
            <div className="col-1" onClick={()=>this.sort(1)}>Name</div>
            <div className="col-1" onClick={()=>this.sort(2)}>City</div>
            <div className="col-1" onClick={()=>this.sort(3)}>Age</div>
            <div className="col-2" onClick={()=>this.sort(4)}>Gender</div>
            <div className="col-2" onClick={()=>this.sort(5)}>Payment</div>
            <div className="col-4"></div>
            </div>
       {data.map((cs,index)=>(
        <div className="row border">
            <div className="col-1">{cs.id}</div>
            <div className="col-1">{cs.name}</div>
            <div className="col-1">{cs.city}</div>
            <div className="col-1">{cs.age}</div>
            <div className="col-2">{cs.gender}</div>
            <div className="col-2">{cs.payment}</div>
            <div className="col-4">
            <button className="btn btn-warning">
            <Link className="text-dark" to={`/customers/${cs.id}/edit`}>Edit</Link>  
            </button>
            <button className="btn btn-danger" >
        <Link className="text-dark" to={`/customers/${cs.id}/delete`}>Delete</Link></button>
            </div>
        </div>
       ))}
       </div>
            </div>
            </div>
        )
    }

}
export default CustomerShow;