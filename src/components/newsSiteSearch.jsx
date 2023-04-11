import React, {Component} from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import BookSiteMainComp from "./cricketNavbar";
import { Link } from "react-router-dom";

import queryString from "query-string";
import http from "./httpService.js";
import NewsSiteLeftPanel from "./newsSiteLeftPanel";

class NewsSiteSearch extends Component{
    state ={response:{},
  search:{},
};



handleChange=(e)=>{
    let {currentTarget : input}=e;
    let options={...this.props.options};
  options[input.name]=input.value;
  console.log(options);
    this.props.onOptionChange(options);
};
async postData(url,obj){
  let response=await http.post(url,obj);
  console.log(response);
  this.props.history.push("/home");
}
handleSubmit=(e)=>{
  e.preventDefault();
  this.props.onOptionChange(this.props.options);
 // this.postData("/home",this.props.options);
}



    render(){
      let {searchString=""}=this.props.options;
      let {str}=this.props;
   
             return(
     <div className="container">
            <div className="row">
                <div className="col-8">
            <div className="form-group m-2">
            <input type="text" className="form-control" id="searchString" 
            name="searchString" placeholder="Enter Search String"
            value={str}
            onChange={this.handleChange}/>
           </div>
           </div>
           <div className="col-2">
      <button className="btn bg-white text-dark m-2" onClick={this.handleSubmit} 
       >Submit</button>
       </div>
       </div>
        </div>
         
    
      
             )
         }
}
export default NewsSiteSearch;