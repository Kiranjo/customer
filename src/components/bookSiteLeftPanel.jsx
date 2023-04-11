import React, {Component} from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import queryString from "query-string";
import http from "./httpService.js";
import PersonOptionCb from "./personOptionCb.jsx";
class BookSiteLeftPanel extends Component{
    state={
     
       
    };
    handleChange=(e)=>{
        let {currentTarget : input}=e;
        let options={...this.props.options};
      if(input.name=="bestseller"||input.name=="language")
      options[input.name]=
      this.updateCBs(options[input.name],input.checked,input.value);
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
  
        makeCheckBoxes=(arr,values,name,yesVal,noVal,FrenchVal,OtherVal)=>  
   (
       <React.Fragment>
    
    {arr.map((opt)=>(
        <div className="form-check" key={opt}>
     <input className="form-check-input" type="checkbox" name={name}
        value={opt}
        checked={values.findIndex((val)=>val===opt)>=0}
         onChange={this.handleChange} />
        <label className="form-check-label">
        {opt=="Yes"?opt+"("+yesVal+")":opt=="No"?opt+"("+noVal+")"
        :opt=="Latin"?opt+"("+yesVal+")":opt=="Other"?opt+"("+OtherVal+")":
       opt=="English"?opt+"("+noVal+")":opt=="French"?opt+"("+FrenchVal+")":opt}</label>
    </div>

    ))}
            </React.Fragment>
        
   )
       

 
    render(){
        let {bestseller="",language=""}=this.props.options;
        let {languages,bestSellers,yesVal, noVal,
            latinVal, EngVal, FrenchVal, OtherVal}=this.props;
        return(
         <div className="container text-center">
        <h5>
        Options
        <hr/>
       Best Seller</h5>
      {this.makeCheckBoxes(bestSellers,bestseller.split(","),"bestseller",yesVal,noVal)}
      <h5>
       
      Language</h5>
      {this.makeCheckBoxes(languages,language.split(","),"language",latinVal,EngVal,FrenchVal,OtherVal)}
 
                </div>
          
        );
}


}
export default BookSiteLeftPanel;