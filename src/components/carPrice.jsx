import React, {Component} from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import queryString from "query-string";
import http from "./httpService.js";

class CarPrice extends Component{
    state={
      
       
    };
    handleChange=(e)=>{
        let {currentTarget : input}=e;
        let options={...this.props.options};
      options[input.name]=input.value;
        this.props.onOptionChange(options);
    };
   
    render(){
        let {minPrice="",maxPrice=""}=this.props.options;
       return(
         <div className="container ">
            <div className="row m-1">
                <div className="col-2">
                    <h6>Price Range: </h6>
                </div>
                <div className="col-4">
           <div className="form-group">
            <input type="text" className="form-control" id="minPrice" 
            name="minPrice" placeholder="minPrice"
            value={minPrice}
            onChange={this.handleChange}/>
        </div>
        </div>
        <div className="col-4">
        <div className="form-group">
          
            <input type="text" className="form-control" id="maxPrice" 
            name="maxPrice" placeholder="maxPrice"
            value={maxPrice}
            onChange={this.handleChange}/>
        </div>
       </div></div>
                </div>
          
        );
}
 
   

}
export default CarPrice;