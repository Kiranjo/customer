import React, {Component} from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import queryString from "query-string";
import http from "./httpService.js";
class PersonOptionCb extends Component{
     handleChange=(e)=>{
        let {currentTarget : input}=e;
        let options={...this.props.options};
      if(input.name=="city" || input.name=="company")
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
   makeDropDown=(arr,value,name,label)=>(    
    <div className="form-group mt-2">
            <select className="form-control" name={name}
           value={value}  onChange={this.handleChange} >
                <option value="">{label}</option>
            {arr.map((opt)=>(
                <option>{opt}</option>
            ))}
            </select>
        </div>
      
    );

    render(){
       let {city="",company="",minAge=""}=this.props.options;
       let {cities,companies,ages}=this.props;
        return(
            <div className="container">
              <div className="row border bg-light">
            <div className="col-12">
                {this.makeCheckBoxes(cities,city.split(","),"city","Select City")}
            </div>
            <div className="col-12">
                {this.makeCheckBoxes(companies,company.split(","),"company","Select Company")}
            </div>

            <div className="col-12">
    {this.makeDropDown(ages,minAge,"minAge","Select minimum Age")}
            </div>
            
            

                </div> 
       
            </div>
        )
    }

}
export default PersonOptionCb;