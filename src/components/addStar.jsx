import React, {Component} from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import queryString from "query-string";
import http from "./httpService.js";
import PersonOptionCb from "./personOptionCb.jsx";
class AddStar extends Component{
    state={
       star:{name:"",info:"",dob:"",country:"",sport:""},
       sports:["Cricket", "Football"],
       countries:["India", "Australia", "Portugal", "Argentina", "Brazil", "France"],
       errors:{},
       
    };
    handleChange=(e)=>{
        const {currentTarget: input}=e;
        let s1={...this.state};
        s1.star[input.name]=input.value;
        this.handleValidate(e);
        this.setState(s1);
    }
    async postData(url,obj){
        let response=await http.post(url,obj);
        console.log(response);
        console.log( this.props.history.push("/stars"));
        this.props.history.push("/stars");
        
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        let errors=this.validateAll();
        console.log(this.isValid(errors));
        if(this.isValid(errors)) 
        {
            console.log( this.postData("/sporticons/star",this.state.star));
            this.postData("/sporticons/star",this.state.star);
        }
        else{
            let s1={...this.state};
            s1.errors=errors;
            this.setState(s1);
        
        }
    }
    isValid=(errors)=>{
        //errors would have keys with non empty strings as values
        let keys=Object.keys(errors);
        console.log(keys);
        let count=keys.reduce((acc,curr)=>(errors[curr]? acc+1 : acc),0);
        console.log(count);
        return count===0;
    }
    validateAll=()=>{
        let {name,info,dob,country,sport}=this.state.star;
        let errors={};
        errors.name=this.validateName(name);
        errors.info=this.validateInfo(info);
        errors.dob=this.validateDob(dob);
        errors.country=this.validateCountry(country);
        errors.sport=this.validateSport(sport);
        console.log(errors);
        return errors;
    }
    validateName=(name)=>
    !name ? "Name must be entered":"";
    validateInfo=(info)=>
    !info ? "Info must be entered":"";
    validateDob=(dob)=>
    !dob ? "DOB must be entered":"";
    validateCountry=(country)=>
    !country ? "Country must be selected":"";
    validateSport=(sport)=>
    !sport ? "Sport must be selected":"";


    isFormValid=()=>{
        console.log("inside disable");
        let errors=this.validateAll();
        return this.isValid(errors);
    }

    handleValidate=(e)=>{
        let {currentTarget: input}=e;
        let s1={...this.state};
        switch (input.name){
            case "name":
         s1.errors.name=this.validateName(input.value);
                break;
         case "info":
          s1.errors.info=this.validateInfo(input.value);
              break;
    case "dob":
     s1.errors.dob=this.validateDob(input.value);
    break;
    case "country":
        s1.errors.country=this.validateCountry(input.value);
                  break;
     case "country":
        s1.errors.sport=this.validateSport(input.value);
                  break;

            default:
                break;

        }
        this.setState(s1);
    }
    render(){
        let {name,info,dob,country,sport}=this.state.star;
        const {sports,countries,errors}=this.state;
        return(
                 <div className="container text-center">
                    <h3 className="">New Sport Star</h3>
              <div className="form-group row m-1" >
            <div className="col-2">    
           <label>Name</label></div>
           <div className="col-6">
            <input type="text" className="form-control" id="name" 
            name="name" placeholder="Enter Name"
            value={name}
            onChange={this.handleChange}/>
             {errors.name ? <span className="text-danger">{errors.name}</span>:""}
        </div>
        </div>
        <div className="form-group row m-1">
        <div className="col-2">    
           <label>Info</label></div>
           <div className="col-6">
            <input type="text" className="form-control" id="info" 
            name="info" placeholder="Enter info"
            value={info}
            onChange={this.handleChange}/>
             {errors.info ? <span className="text-danger">{errors.info}</span>:""}
        </div></div>
        <div className="form-group row m-1">
        <div className="col-2">    
           <label>DOB</label></div>
           <div className="col-6">
            <input type="text" className="form-control" id="dob" 
            name="dob" placeholder="Enter DOB"
            value={dob}
            onChange={this.handleChange}/>
             {errors.dob ? <span className="text-danger">{errors.dob}</span>:""}
        </div></div>
        {this.makeDropDown(countries,country,"country","Select Country","Country",errors)}
        {this.makeDropDown(sports,sport,"sport","Select Sport","Genre",errors)}
       <br/>
       <button className="btn btn-primary text-center"
        onClick={this.handleSubmit}>Create</button>
            </div>
        )
    }
    makeDropDown=(arr,value,name,label,first,errors={})=>(    
        <div className="form-group row m-1">
        <div className="col-2">    
           <label>{first}</label></div>
           <div className="col-6">
                <select className="form-control" name={name}
               value={value}  onChange={this.handleChange} >
                    <option value="">{label}</option>
                {arr.map((opt)=>(
                    <option>{opt}</option>
                ))}
                </select>
      {name=="country"?errors.country? <span className="text-danger">{errors.country}
      </span>:"":
      name=="sport"?errors.sport? <span className="text-danger">{errors.sport}
      </span>:"":""}
            </div>
            </div>
          
        );
}
export default AddStar;