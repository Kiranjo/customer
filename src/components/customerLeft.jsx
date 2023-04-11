import React, {Component} from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import queryString from "query-string";
import http from "./httpService.js";

class CustomerLeft extends Component{
    state={
        cities:["Delhi","Noida","Gurgaon","Jaipur"],
        payments:["Credit Card","Debit Card","Wallet"],
        genders:["Male","Female"],
       
    };
    handleChange=(e)=>{
        let {currentTarget : input}=e;
        let options={...this.props.options};
      options[input.name]=input.value;
        this.props.onOptionChange(options);
    };
   
      
       

 
    render(){
        let {city="",gender="",payment=""}=this.props.options;
        let {cities,genders,payments}=this.state;
        return(
         <div className="container ">
       
        {this.showRadios("City",cities,"city",city)}
     <br/>
     {this.showRadios("Gender",genders,"gender",gender)}
     <br/>
      {this.showRadios("Payment",payments,"payment",payment)}
       
                </div>
          
        );
}
 showRadios=(label,arr,name,selVal)=>{     
    return(   
        <React.Fragment>
     <label className="form-check-label font-weight-bold ">{label}</label><br/>
    {arr.map((opt)=>(
        <div className="form-check border">
        <input className="form-check-input" type="radio" name={name} 
        value={opt}
        checked={selVal===opt} onChange={this.handleChange}/>
        <label className="form-check-label">{opt}</label>
    </div>

    ))}
    </React.Fragment>
    )
    }
   

}
export default CustomerLeft;