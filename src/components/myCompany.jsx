import React, {Children, Component} from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import queryString from "query-string";
import http from "./httpService.js";
import CompanyAll from "./comapnyAll.jsx";
import NewDelhi from "./newDelhi.jsx";
import Noida from "./noida.jsx";
import MyCompanyNavBar from "./myCompanynav.jsx";

class MyCompany extends Component{
    state={
      employees:[
 
            {
             name: "Amit Kumar",
             department: "Finance",
             designation: "Manager",
             salary: 24000,
             email: "amit.kumar@company.com",
             mobile: "9898346473",
             location: "New Delhi"
             },
             
            {
             name: "Preeti Sharma",
             department: "Technology",
             designation: "Manager",
             salary: 28500,
             email: "preeti.sharma@company.com",
             mobile: "9898236541",
             location: "New Delhi"
             },
             
            {
             name: "Vishal Verma",
             department: "Operations",
             designation: "Manager",
             salary: 22100,
             email: "vishal.verma@company.com",
             mobile: "9910346632",
             location: "New Delhi"
             },
             
            {
             name: "Charu Kumari",
             department: "HR",
             designation: "Manager",
             salary: 23500,
             email: "charu.kumari@company.com",
             mobile: "7023734553",
             location: "New Delhi"
             },
             
            {
             name: "Puneet Gupta",
             department: "Finance",
             designation: "Trainee",
             salary: 14450,
             email: "puneet.gupta@company.com",
             mobile: "8836436731",
             location: "Noida"
             },
             
            {
             name: "Namita Singh",
             department: "Technology",
             designation: "Trainee",
             salary: 14590,
             email: "namita.singh@company.com",
             mobile: "9801228812",
             location: "Noida"
             },
             
            {
           
             name: "Samit Bansal",
             department: "Operations",
             designation: "Trainee",
             salary: 13900,
             email: "samit.bansal@company.com",
             mobile: "7003551118",
             location: "Noida"
             },
             
            {
             name: "Priya Talwar",
             department: "HR",
             designation: "Trainee",
             salary: 14450,
             email: "priya.talwar@company.com",
             mobile: "814452341",
             location: "Noida"
             },
             
            {
             name: "Shivam Singh",
             department: "Finance",
             designation: "Trainee",
             salary: 15100,
             email: "shivam.singh@company.com",
             mobile: "7173958440",
             location: "Noida"
             },
             
            {
             name: "Shelja Prasad",
             department: "Technology",
             designation: "Trainee",
             salary: 15500,
             email: "shelja.prasad@company.com",
             mobile: "9898346473",
             location: "Noida"
             },
             
            {
             name: "Mithali Dutt",
             department: "Finance",
             designation: "President",
             salary: 68200,
             email: "mithali.dutt@company.com",
             mobile: "98100346731",
             location: "New Delhi"
             },
             
            {
             name: "Pradeep Kumar",
             department: "Technology",
             designation: "President",
             salary: 84900,
             email: "pradeep.kumar@company.com",
             mobile: "98254634121",
             location: "New Delhi"
             },
             
            {
             name: "Amit Singh",
             department: "Operations",
             designation: "President",
             salary: 71250,
             email: "amit.singh@company.com",
             mobile: "98145537842",
             location: "New Delhi"
             },
             {
             name: "Garima Rai",
             department: "HR",
             designation: "President",
             salary: 69200,
             email: "garima.rai@company.com",
             mobile: "998107654387",
             location: "New Delhi"
             }
            ],

    }
    render(){
        let {employees}=this.state;
        return(
            <div className="container">
        <MyCompanyNavBar />
        <Switch>
        <Route path="/emps/:page" 
       render={(props)=><CompanyAll {...props} employees={employees}/>}/>   
         <Route path="/NewDelhi" 
       render={(props)=><NewDelhi {...props} employees={employees}/>}/> 
         <Route path="/Noida" 
       render={(props)=><Noida {...props} employees={employees}/>}/> 
       
        <Redirect from="/" to="/emps/1"/>
        </Switch>
            </div>
        )
    }

}
export default MyCompany;