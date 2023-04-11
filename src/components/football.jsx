import React, {Component} from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import queryString from "query-string";
import http from "./httpService.js";
import SportOptRadio from "./sportOptRadio.jsx";
class Football extends Component{
    state ={data:{},
    countriesOpt:["India", "Australia", "Portugal", "Argentina", "Brazil", "France"],
};
    async fetchData(){
        let queryParams = queryString.parse(this.props.location.search);
        let searchStr=this.makeSearchString(queryParams);
      // let {page="1"}=queryParams;
       let response= await http.get(`/sporticons/stars?${searchStr}`);
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
    handlePage=(incr)=>{
        let queryParams=queryString.parse(this.props.location.search);
        let {page="1"}=queryParams;
        let newPage= +page + incr;
        queryParams.page= newPage;
        console.log(queryParams);
        this.callURL("/stars",queryParams);
    }
    handleOptionChange=(options)=>{
        options.page="1";
        this.callURL("/stars",options);
    }

    callURL=(url,options)=>{
        let searchString=this.makeSearchString(options);
        this.props.history.push({
            pathName: url,
            search: searchString,
        });
    }
    makeSearchString=(options)=>{
       // console.log(options);
        let {page,countries}=options;
        let searchStr="";
        searchStr=this.addToQueryString(searchStr,"page",page);
        searchStr=this.addToQueryString(searchStr,"countries",countries);
        console.log(searchStr);
        return searchStr;
    }
    addToQueryString=(str,paramName,paramValue)=>
    paramValue ? str ? `${str}&${paramName}=${paramValue}`:
    `${paramName}=${paramValue}`:str;

    render(){
   const {pageInfo={},stars=[]}=this.state.data;
   const {countriesOpt}=this.state;
   let {pageNumber, numberOfPages, numOfItems, totalItemCount}=pageInfo;
   let queryParams=queryString.parse(this.props.location.search);
     let stars1=stars.filter((st)=>st.sport=="Football");
     console.log(stars1);
        return(
 <div className="container">
    
    <br/>
    <div className="row">
        <div className="col-3">
            <SportOptRadio options={queryParams} countriesOpt={countriesOpt}
            onOptionChange={this.handleOptionChange}/>
        </div>
   <div className="col-9">
    <div className="row bg-info text-white border">
        <div className="col-4 border">Name</div>
        <div className="col-4 border">Country</div>
        <div className="col-4 border">Sport</div>
    </div>
 {stars1.map((sp)=>(
    <div className="row">
        <div className="col-4 border">
            <Link to ={`/details/${sp.id}`}>{sp.name}</Link></div>
        <div className="col-4 border">{sp.country}</div>
        <div className="col-4 border">{sp.sport}</div>
    </div>
 ))}
 <div className="row">
    <div className="col-2">
        {pageNumber >1 ? (
            <button className="btn btn-primary btn-sm" 
            onClick={()=>this.handlePage(-1)}>Prev</button>
        ):("")}  
    </div>
    <div className="col-8"></div>
    <div className="col-2">
    {numberOfPages < numOfItems ? (
            <button className="btn btn-primary btn-sm" 
            onClick={()=>this.handlePage(1)}>Next</button>
        ):("")}    
    </div>
 </div>
        </div></div>

            </div>
        )
    }
}
export default Football;