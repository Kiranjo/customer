import React, {Component} from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import BookSiteMainComp from "./cricketNavbar";
import { Link } from "react-router-dom";

import queryString from "query-string";
import http from "./httpService.js";
import NewsSiteLeftPanel from "./newsSiteLeftPanel";
import NewsSiteSearch from "./newsSiteSearch";

class NewsSiteAll extends Component{
    state ={data:{},
  search:{},
  selectedOption:{},
};

async fetchData(){
    let queryParams = queryString.parse(this.props.location.search);
   let searchStr=this.makeSearchString(queryParams);
  // let {page="1"}=queryParams;
 //  let response= await http.get(`&q=all?${searchStr}`);
 let response= await http.get(`?${searchStr} &api-key=3b4d4934-082c-4288-b1d1-67707f4fd8b8`);
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
    this.callURL("/home",queryParams);
}
handleOptionChange=(options)=>{
    console.log(options);
    this.state.selectedOption=options;
    options.page="1";
    this.callURL("/home",options);
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
     let {page,orderBy,sectionName,searchString}=options;
     let searchStr="";
     searchStr=this.addToQueryString(searchStr,"page",page);
     searchStr=this.addToQueryString(searchStr,"orderBy",orderBy);
     searchStr=this.addToQueryString(searchStr,"sectionName",sectionName);
     searchStr=this.addToQueryString(searchStr,"searchStr",searchString);
     console.log(searchStr);
     return searchStr;
 }
 addToQueryString=(str,paramName,paramValue)=>{
  return paramValue ? str ? `${str}&${paramName}=${paramValue}`:
 `${paramName}=${paramValue}`:str;}
   
 


    render(){
        const { response={}}=this.state.data;
        let {selectedOption}=this.state;
        const { total, startIndex,pageSize,  currentPage, 
          pages, results=[]}=response;
        console.log(results);
  let queryParams=queryString.parse(this.props.location.search);
 let results2=results.filter((rs)=>rs.webTitle.includes(queryParams.searchString));
 console.log(results2);
        return(
     <div className="container">
         <div className="row">
            <div className="col-3">
<NewsSiteLeftPanel options={queryParams}  onOptionChange={this.handleOptionChange}/>
            </div>
            <div className="col-9">
      
        <div className="row">
<NewsSiteSearch options={queryParams} onOptionChange={this.handleOptionChange} />   
        {results2.map((res)=>(
  <div className="col-4 bg-info text-dark border">
    {res.webTitle}<br/>
    <h5>Source:{res.pillarName}<br/>
               {res.webPublicationDate} </h5>
   
    </div>
        ))}
            
        </div>
        <div className="row">
         <div className="col-2">
             {queryParams.page > 1 ? (
                 <button className="btn btn-primary btn-sm" 
                 onClick={()=>this.handlePage(-1)}>Prev</button>
             ):("")}  
         </div>
         <div className="col-8"></div>
         <div className="col-2">
         {pages > currentPage ? (
                 <button className="btn btn-primary btn-sm" 
                 onClick={()=>this.handlePage(1)}>Next</button>
             ):("")}    
         </div>
      </div>
        </div>
            </div>
     </div>
      
             )
         }
}
export default NewsSiteAll;