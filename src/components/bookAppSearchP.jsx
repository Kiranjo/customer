import React, {Children, Component} from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import queryString from "query-string";
import { Link } from "react-router-dom";
import http from "./httpService.js";
import img1 from "./images/bookAppFront.png";
import BookAppSearchPage from "./bookAppSearchPage.jsx";
class BookAppSearchP extends Component{
    state ={ data:{},
    img:{img1},
    search:{},
    searchItem:"",
  };
  
  
  
  handleChange=(e)=>{
      let {currentTarget : input}=e;
      let options={...this.props.options};
    options[input.name]=input.value;
    this.state.searchItem=input.value;
    this.props.onOptionChange(this.state.searchItem);
     // this.props.onOptionChange(options);
  };
  async postData(url,obj){
    let response=await http.post(url,obj);
   // console.log(response);
    this.props.history.push("/");
  }
  handleSubmit=(e)=>{
    e.preventDefault();
    console.log(this.props.searchItem);
    this.props.onOptionChange(this.state.searchItem)  
  }
 
  
      render(){
        let {searchString=""}=this.props.options;
        let {str}=this.props;
      let {img}=this.state;
               return(
       <div className="container text-center">
        <img className="text-center" src={img.img1}></img>
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
        <button className="btn btn-primary m-2" onClick={this.handleSubmit}
         > <Link className="text-dark" to={`/books/${this.state.searchItem}`}> Submit</Link>
         </button>
         </div>
         </div>
          </div>
           
      
        
               )
           }

}
export default BookAppSearchP;