import React, {Component} from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import queryString from "query-string";
import http from "./httpService.js";
class AddPerson extends Component{
    state={
        person:{name:"",age:"",city:"",company:""},
        cities:["London","Paris","New Delhi","Bangalore"],
        companies:["Apple","Google","Facebook","Microsoft","Tesla"],
        edit: false,
    }
    async componentDidMount(){
        this.fetchData();
    }
    async fetchData(){
        const {id}=this.props.match.params;
        if(id){
            let response=await http.get(`/personApp/persons/${id}`);
            let {data}=response;
            this.setState({person:data, edit: true});
        }
        else{
        let person={name:"",age:"",city:"",company:""};
        this.setState({person:person,edit:false});

        }
       
    }
    handleChange=(e)=>{
        const {currentTarget: input}=e;
        let s1={...this.state};
        s1.person[input.name]=input.value;
        this.setState(s1);
    }
    async postData(url,obj){
        let response=await http.post(url,obj);
        console.log(response);
        this.props.history.push("/persons");
    }
    async putData(url,obj){
        let response=await http.put(url,obj);
        console.log(response);
        this.props.history.push("/persons");
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        let {person,edit}=this.state;
        edit? this.putData(`/personApp/persons/${person.id}`,person):
        this.postData("/personApp/persons",person);
    }
    render(){
        let {name,age,city,company}=this.state.person;
        const {cities,companies}=this.state;
        return(
                 <div className="container">
              <div className="form-group">
            <label>Name</label>
            <input type="text" className="form-control" id="name" 
            name="name" placeholder="Enter Name"
            value={name}
            onChange={this.handleChange}/>
        </div>
        <div className="form-group">
            <label>Age</label>
            <input type="text" className="form-control" id="age" 
            name="age" placeholder="Enter Age"
            value={age}
            onChange={this.handleChange}/>
        </div>
        {this.makeDropDown(cities,city,"city","Select City")}
        {this.makeDropDown(companies,company,"company","Select Company")}
       <br/>
       <button className="btn btn-primary " onClick={this.handleSubmit}>Submit</button>
            </div>
        )
    }
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

}
export default AddPerson;