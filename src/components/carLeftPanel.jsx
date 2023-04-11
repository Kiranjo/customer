import React, {Component} from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import queryString from "query-string";
import http from "./httpService.js";

class CarLeftPanel extends Component{
    state={
        fuels:["Diesel","Petrol"],
        types:["Hatchback","Sedan"],
        sorts:["kms","price","year"],
       
    };
    handleChange=(e)=>{
        let {currentTarget : input}=e;
        let options={...this.props.options};
      options[input.name]=input.value;
        this.props.onOptionChange(options);
    };
   
      
       

 
    render(){
        let {fuel="",type="",sort=""}=this.props.options;
        let {fuels,types,sorts}=this.state;
        return(
         <div className="container ">
       
        {this.showRadios("Fuel",fuels,"fuel",fuel)}
     <br/>
     {this.showRadios("Type",types,"type",type)}
     <br/>
      {this.showRadios("Sort",sorts,"sort",sort)}
       
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
export default CarLeftPanel;