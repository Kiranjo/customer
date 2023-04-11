import React, {Component} from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import queryString from "query-string";
import http from "./httpService.js";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import CarLeftPanel from "./carLeftPanel.jsx";
import CarPrice from "./carPrice.jsx";


class CarHome extends Component{
    state ={data:[],
        max:"",
        min:"",
    };
    
    async fetchData(){
        let queryParams = queryString.parse(this.props.location.search);
        let searchStr=this.makeSearchString(queryParams);
       let response= await http.get(`/cars?${searchStr}`);
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
        this.callURL("/cars",options);
    }
    makeSearchString=(options)=>{
        console.log(options);
        let {minPrice,maxPrice,fuel,type,sort}=options;
        let searchStr="";
        searchStr=this.addToQueryString(searchStr,"minPrice",minPrice);
        searchStr=this.addToQueryString(searchStr,"maxPrice",maxPrice);
        searchStr=this.addToQueryString(searchStr,"fuel",fuel);
        searchStr=this.addToQueryString(searchStr,"type",type);
        searchStr=this.addToQueryString(searchStr,"sort",sort);
        console.log(searchStr);
        return searchStr;
    }
    addToQueryString=(str,paramName,paramValue)=>
    paramValue ? str ? `${str}&${paramName}=${paramValue}`:
    `${paramName}=${paramValue}`:str;
    
 
        render(){
           let {data=[],max,min}=this.state; 
            let {id}=this.props.match.params;
            console.log(data);
            let queryParams=queryString.parse(this.props.location.search);
            max=+queryParams.maxPrice;
            min=+queryParams.minPrice;
            let data1=max?data.filter((ds)=>ds.price<+max):data;
            let data2=min?data1.filter((ds)=>ds.price>+min):data;
           
            return(
                <div className="container">
                    <div className="row">
                        <div className="col-3">
           <CarLeftPanel options={queryParams} onOptionChange={this.handleOptionChange}/>
                        </div>
                        <div className="col-9">
                    <h3 className="text-center">All cars</h3>
        <CarPrice options={queryParams} onOptionChange={this.handleOptionChange}/>
                    <div className="row text-center">
             {data2.map((ds)=>(
                <div className="col-3 bg-warning border">
                    <h5>{ds.model}</h5>
                    Price: {ds.price}<br/>
                    Color: {ds.color}<br/>
                    Mileage: {ds.kms}<br/>
                    Manufactured in {ds.year}<br/>
  
        
           <div className="row">
            <div className="col-2">
         
            <Link className="text-dark" to={`/cars/${ds.id}/edit`}>
            <FontAwesomeIcon icon={faEdit}/></Link>  
            </div>
            <div className="col-6"></div>
            <div className="col-2">
            <Link className="text-dark" to={`/cars/${ds.id}/delete`}>
            <FontAwesomeIcon icon={faTrash}/>
            </Link>
          </div>
           </div>
       </div>
          
     
           
             ))}
           </div>
           </div>
                </div>
                </div>
             
            )
        }
    

}
export default CarHome;