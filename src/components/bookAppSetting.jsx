import React, {Children, Component} from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import queryString from "query-string";
import http from "./httpService.js";


class BookAppSetting extends Component{
    state={   
         options:this.props.options,
    }
    
    handleChange=(e)=>{
        console.log(e);
        let {currentTarget : input}=e;
        let s1={...this.state};
       input.type=="checkbox"?
      s1.options[input.name]=input.checked:
       s1.options[input.name]= input.value;
       this.setState(s1);
       console.log(s1.options);
        this.props.onOptionChange(s1.options);
    };
  
    render(){
        let {printType=true,language=true,filterS=true,orderBy=true,noOfpage=8}=this.state.options;
        console.log(this.state.options);
        return(
            <div className="container">
      <h3 className="text-danger">Select Options for filtering on Left Panel</h3>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" name="printType" 
       checked={printType} onChange={this.handleChange} />
        <label className="form-check-label">printType--(Restrict to books on magazines)</label>
    </div>
    <div className="form-check">
        <input className="form-check-input" type="checkbox" name="language" 
        checked={language} onChange={this.handleChange} />
        <label className="form-check-label">languages--(Restrict the volume returned to 
        those that are tagged with the specified language.)</label>
    </div>
    <div className="form-check">
        <input className="form-check-input" type="checkbox" name="filterS" 
       checked={filterS} onChange={this.handleChange} />
        <label className="form-check-label">filter--(Filter search result by volume type 
        and availability)</label>
    </div>
    <div className="form-check">
        <input className="form-check-input" type="checkbox" name="orderBy" 
       checked={orderBy} onChange={this.handleChange} />
        <label className="form-check-label">orderBy--(Order of the volume search result)</label>
    </div>

    <div className="form-group">
            <label className="text-success">Number of entries on a page</label>
            <input type="text" className="form-control" id="noOfpage" 
            name="noOfpage" placeholder="Enter number of entries"
            value={noOfpage}
            onChange={this.handleChange}/>
        </div>


            </div>
        )
    }
}
export default BookAppSetting;