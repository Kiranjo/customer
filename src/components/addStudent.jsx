import React, {Component} from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import queryString from "query-string";
import http from "./httpService.js";

class AddStudent extends Component{
    state={
        student:{name:"",course:"",grade:"",city:""},
        cities:["London","Paris","New Delhi","Bangalore"],
        grades:["A","B","C","D"],
        edit: false,
    }
    async componentDidMount(){
        this.fetchData();
    }
    async fetchData(){
        const {id}=this.props.match.params;
        if(id){
            let response=await http.get(`/svr/students/${id}`);
            let {data}=response;
            this.setState({student:data, edit: true});
        }
        else{
        let student={name:"",course:"",grade:"",city:""};
        this.setState({student:student,edit:false});

        }
       
    }
    handleChange=(e)=>{
        const {currentTarget: input}=e;
        let s1={...this.state};
        s1.student[input.name]=input.value;
        this.setState(s1);
    }
    async postData(url,obj){
        let response=await http.post(url,obj);
        console.log(response);
        this.props.history.push("/students");
    }
    async putData(url,obj){
        let response=await http.put(url,obj);
        console.log(response);
        this.props.history.push("/students");
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        let {student,edit}=this.state;
        edit? this.putData(`/svr/students/${student.id}`,student):
        this.postData("/svr/students",student);
    }
    render(){
        let {name,course,grade,city}=this.state.student;
        const {cities,grades}=this.state;
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
            <label>Course</label>
            <input type="text" className="form-control" id="course" 
            name="course" placeholder="Enter Course"
            value={course}
            onChange={this.handleChange}/>
        </div>
        {this.makeDropDown(grades,grade,"grade","Select Grade")}
        {this.makeDropDown(cities,city,"city","Select City")}
       
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
export default AddStudent;