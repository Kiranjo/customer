import React, {Component} from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import queryString from "query-string";
import http from "./httpService.js";
import PersonOptionCb from "./personOptionCb.jsx";
class NewsSiteLeftPanel extends Component{
    state={
     orderBys:["newest","oldest","relevance"],
     sections:["Business","Technology","Politics","LifeStyle"],
       
    };
    handleChange=(e)=>{
        let {currentTarget : input}=e;
        let options={...this.props.options};
      options[input.name]=input.value;
        this.props.onOptionChange(options);
    };
   
      
       

 
    render(){
        let {orderBy="",sectionName=""}=this.props.options;
        let {orderBys,sections}=this.state;
        return(
         <div className="container text-center">
        <h4 >Order By </h4>
     {this.showDropDown("",orderBys,"orderBy",orderBy,"Select Order")}
     <br/>
     <h4 >Sections</h4>
      {this.showRadios("",sections,"sectionName",sectionName)}
       
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
    showDropDown=(label,arr,name,selVal,firstItem)=>{
        return(
    <div className="form-group">
            <label>{label}</label>
            <select className="form-control" name={name}
           value={selVal}  onChange={this.handleChange} >
                <option selected disabled value="">{firstItem}</option>
            {arr.map((y1)=>(
                <option>{y1}</option>
            ))}
            </select>
        </div>
        )
    }

}
export default NewsSiteLeftPanel;