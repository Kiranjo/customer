import React, {Component} from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import queryString from "query-string";
import http from "./httpService.js";
import PersonOptionCb from "./personOptionCb.jsx";
class SportOptRadio extends Component{
    state={
     
       
    };
    handleChange=(e)=>{
        let {currentTarget : input}=e;
        let options={...this.props.options};
      if(input.name=="countries")
      options[input.name]=this.updateCBs(options[input.name],input.checked,input.value);
      else
      options[input.name]=input.value;
      console.log("OptionsCB",options);
        this.props.onOptionChange(options);
    };
    updateCBs=(inpValue,checked,value)=>{
        let inpArr=inpValue? inpValue.split(",") :[];
        if(checked) inpArr.push(value);
        else{
            let index=inpArr.findIndex((ele)=>ele==value);
            if(index>=0) inpArr.splice(index,1);
        }
        return inpArr.join(",");
    }
  
        makeCheckBoxes=(arr,values,name,label)=>  
   (
      
       <React.Fragment>
     <label className="form-check-label font-weight-bold ">{label}</label>
    {arr.map((opt)=>(
        <div className="form-check" key={opt}>
     <input className="form-check-input" type="checkbox" name={name}
        value={opt}
        checked={values.findIndex((val)=>val===opt)>=0}
         onChange={this.handleChange} />
        <label className="form-check-label">{opt}</label>
    </div>

    ))}
            </React.Fragment>
        
   )
       

 
    render(){
        let {countries=""}=this.props.options;
        let {countriesOpt}=this.props;
        return(
         <div className="container text-center">
        <h6>Left Comp!<br/>
        Options
        <hr/>
        Countries</h6>
      {this.makeCheckBoxes(countriesOpt,countries.split(","),"countries","")}
     {/* {this.showRadios("",countriesOpt,"countries",countries)}*/}
       
                </div>
          
        );
}
 showRadios=(label,arr,name,selVal)=>{     
    return(   
        <React.Fragment>
     <label className="form-check-label font-weight-bold ">{label}</label><br/>
    {arr.map((opt)=>(
        <div className="form-check">
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
export default SportOptRadio;