import React, {Component} from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import queryString from "query-string";
import http from "./httpService.js";
class BookAppLeft extends Component{
    state={
     languages:["en","fr","hi","es","zh"],
     filters:["full","partial","free-eBooks","Paid-eBooks","ebooks"],
     printTypes:["all","books","magazines"],
     orderBys:["relevance","newest"],
       
    };
    handleChange=(e)=>{
        let {currentTarget : input}=e;
        let options={...this.props.options};
      options[input.name]=input.value;
        this.props.onOptionChange(options);
    };
   
      
       

 
    render(){
        let {langRestrict ="",filter="",printType="",orderBy=""}=this.props.options;
        let {selectedOptions, seloptions}=this.props;
       console.log(seloptions);
        let {languages,filters,printTypes,orderBys}=this.state;
        return(
         <div className="container">
        <h5>Language</h5>
   
       {seloptions.language?this.showRadios("",languages,"langRestrict",langRestrict):""}
      <h5>Filter</h5>
      {seloptions.filterS?this.showRadios("",filters,"filter",filter):""}
      <h5>Print Type</h5>
     {seloptions.printType?this.showRadios("",printTypes,"printType",printType):""}
        <h5 >Order By </h5>
  {seloptions.orderBy?
  this.showDropDown("",orderBys,"orderBy",orderBy,"Select Order"):""}
     <br/>
                </div>
          
        );
}
 showRadios=(label,arr,name,selVal)=>{    
    console.log(selVal); 
    return(   
        <React.Fragment>
     <label className="form-check-label font-weight-bold ">{label}</label><br/>
    {arr.map((opt)=>(
        <div className="form-check border">
        <input className="form-check-input" type="radio" name={name} 
        value={opt}
        checked={selVal==opt} onChange={this.handleChange}/>
        <label className="form-check-label">
            {opt=="en"?"English":opt=="fr"?"French":opt=="hi"?"Hindi"
        :opt=="es"?"Spanish":opt=="zh"?"Chinese":opt}</label>
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
export default BookAppLeft;