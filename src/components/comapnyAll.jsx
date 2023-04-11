import React, {Component} from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import queryString from "query-string";
import http from "./httpService.js";
import MyCompanyLeft from "./myCompanyLeft";
class CompanyAll extends Component{
    handleOptionChange=(options)=>{
      
        this.callURL("/emps/1",options);

    }
    callURL=(url,options)=>{
        let searchString=this.makeSearchString(options);
        this.props.history.push({
            pathname: url,
            search:searchString,
        });
    }
    makeSearchString=(options)=>{
        let {designation,department}=options;
        let searchStr="";
        searchStr=this.addToQueryString(searchStr,"department",department);
        searchStr=this.addToQueryString(searchStr,"designation",designation);
        console.log(searchStr);
        return searchStr;
    }
    addToQueryString=(str,paramName,paramValue)=>(
    paramValue? str?
    `${str}&${paramName}=${paramValue}`:
    `${paramName}=${paramValue}`:str);

    filterParams=(arr,queryParams)=>{
        let {department,designation}=queryParams;
        arr=this.filterParam(arr,"department",department);
        arr=this.filterParam(arr,"designation",designation);
       
        return arr;
    }
    filterParam=(arr,name,values)=>{
        if(!values) return arr;
        let valuesArr=values.split(",");
       let arr1= arr.filter((a1)=>valuesArr.find((val)=>val===a1[name]));
        return arr1;
    }
    makeAllOptions=(arr)=>{
        let json={};
        json.department=this.getDifferentValues(arr,"department");
        json.designation=this.getDifferentValues(arr,"designation");
       
        return json;
    }
    getDifferentValues=(arr,name)=>
    arr.reduce((acc,curr)=>
    acc.find(val=>val===curr[name])? acc:[...acc,curr[name]],[]);
    render(){
        let {employees}=this.props;
        const {page}=this.props.match.params;
        let queryParams=queryString.parse(this.props.location.search);
        let searchString=this.makeSearchString(queryParams);
        let pageNum=+page;
        let size=2;
        let employees1=this.filterParams(employees,queryParams);
        let startIndex=(pageNum-1)*size;
        let endIndex=employees.length>startIndex+size-1? startIndex+size-1:
        employees.length-1;
        console.log(employees);
        let employees2=employees1.length>2? 
        employees1.filter((emp,index)=>index >=startIndex && index<=endIndex):employees1;
        console.log(employees2);
        let allOptions=this.makeAllOptions(employees);
        return(
 <div className="container">
    <div className="row">
        <div className="col-3">
    <MyCompanyLeft allOptions={allOptions}
            options={queryParams} onOptionChange={this.handleOptionChange}/>
        </div>
        <div className="col-9">
  
    <h3 className="text-center">Welcome to Employee Portal</h3>
    <h5>You have Chosen</h5>
    Location: All <br/>
    Department:{queryParams.department?queryParams.department:"All"}<br/>
    Designation :{queryParams.designation?queryParams.designation:"All"} <br/>
    <br/>
    The number of employees matching the options:{employees1.length}
  <div className="row">
  
        {employees2.map((emp)=>(
          
            <div className="col-6 border bg-light">
                <h5>{emp.name}</h5>
                {emp.email}<br/>
               Mobile: {emp.mobile}<br/>
               Location: {emp.location}<br/>
              Department:  {emp.department}<br/>
              Designation:  {emp.designation}<br/>
              Salary:  {emp.salary}<br/>

            </div>
          
        ))}
   </div>
   <div className="row">
    <div className="col-2">{startIndex >0 ?(
    <Link to={`/emps/${pageNum-1}?${searchString}`}>Prev</Link>):""}</div>

    <div className="col-8"></div>
    <div className="col-2">{endIndex < employees1.length-1 ? (
    <Link to={`/emps/${pageNum+1}?${searchString} `}>Next</Link>):""}</div>
    </div>
  </div>

  </div>      </div>
        )
    }
}
export default CompanyAll;