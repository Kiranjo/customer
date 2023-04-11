import React, {Component} from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import queryString from "query-string";
import http from "./httpService.js";



class CustomerAdd extends Component{
    state={
       customer:{id:"",name:"",city:"",age:"",gender:"",payment:""},
       cities:["Delhi","Noida","Gurgaon","Jaipur"],
       payments:["Credit Card","Debit Card","Wallet"],
       genders:["Male","Female"],
       edit:false,
    }
    async componentDidMount(){
        this.fetchData();
    }
    async fetchData(){
        const {id}=this.props.match.params;
        if(id){
            let response=await http.get(`/customers/${id}`);
            let {data}=response;
            this.setState({customer:data, edit: true});
        }
        else{
         let customer={id:"",name:"",city:"",age:"",gender:"",payment:""};
        this.setState({customer:customer,edit:false});

        }
       
    }
    handleChange=(e)=>{
        const {currentTarget: input}=e;
        let s1={...this.state};
        s1.customer[input.name]=input.value;
        this.setState(s1);
    }
    async postData(url,obj){
        let response=await http.post(url,obj);
        console.log(response);
        this.props.history.push("/customers");
    }
    async putData(url,obj){
        let response=await http.put(url,obj);
        console.log(response);
        this.props.history.push("/customers");
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        let {customer,edit}=this.state;
        edit? this.putData(`/customers/${customer.id}`,customer):
        this.postData("/customers",customer);
    }
    render(){
        let {id,name,city,age,gender,payment}=this.state.customer;
        let {cities,payments,genders}=this.state;
        return(
                 <div className="container">
                    <div className="form-group">
            <label>CustomerID</label>
            <input type="text" className="form-control" id="id" 
            name="id" placeholder="Enter ID"
            value={id}
            onChange={this.handleChange}/>
        </div>
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
        City
        {this.makeDropDown(cities,city,"city","Select City")}
      
       <br/>
       {this.showRadios("Gender",genders,"gender",gender)}
       <br/>
       {this.showRadios("Payment",payments,"payment",payment)}
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
        showRadios=(label,arr,name,selVal)=>{    
            return(   
                <React.Fragment>
             <label className="form-check-label font-weight-bold ">{label}</label><br/>
            {arr.map((opt)=>(
                <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name={name} 
                value={opt}
                checked={selVal==opt} onChange={this.handleChange}/>
                <label className="form-check-label">
                    {opt}</label>
            </div>
        
            ))}
            </React.Fragment>
            )
            }

    }
export default CustomerAdd;