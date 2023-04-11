import React, {Component} from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import http from "./httpService.js";
import { wind } from "fontawesome";


class CarAdd extends Component{
    state={
       car:{id:"",price:"",kms:"",year:"",model:"",color:""},
 models:["Swift Dzire VXi","Etios SMi","City AXi","Swift DXi","Etios VXi","City ZXi"],
     colors:["Silver Grey","Metallic Blue","Black","White","Steel Grey","Red",], 
 edit:false,
     }
     async componentDidMount(){
         this.fetchData();
     }
     async fetchData(){
         const {id}=this.props.match.params;
         if(id){
             let response=await http.get(`/cars/${id}`);
             let {data}=response;
             this.setState({car:data, edit: true});
         }
         else{
          let  car={id:"",price:"",kms:"",year:"",model:"",color:""};
         this.setState({car:car,edit:false});
 
         }
        
     }
     handleChange=(e)=>{
         const {currentTarget: input}=e;
         let s1={...this.state};
         s1.car[input.name]=input.value;
         this.setState(s1);
     }
     async postData(url,obj){
         let response=await http.post(url,obj);
         console.log(response);
         this.props.history.push("/cars");
     }
     async putData(url,obj){
         let response=await http.put(url,obj);
         console.log(response);
         this.props.history.push("/cars");
     }
     handleSubmit=(e)=>{
         e.preventDefault();
         let {car,edit}=this.state;
         console.log(car);
         if(edit){
            window.alert(car.id+ "Updated")
          this.putData(`/cars/${car.id}`,car);
         }
         else{
            window.alert(car.id+ " inserted");
         this.postData("/cars",car);
         }
     }
     render(){
         let {id,price,kms,year,model,color}=this.state.car;
         let {models,colors}=this.state;
         return(
                  <div className="container">
                     <div className="form-group">
             <label>CarID</label>
             <input type="text" className="form-control" id="id" 
             name="id" placeholder="Enter ID"
             value={id}
             onChange={this.handleChange}/>
         </div>
               <div className="form-group">
             <label>Price</label>
             <input type="text" className="form-control" id="price" 
             name="price" placeholder="Enter Price"
             value={price}
             onChange={this.handleChange}/>
         </div>
         <div className="form-group">
             <label>Mileage in kms</label>
             <input type="text" className="form-control" id="kms" 
             name="kms" placeholder="Enter kms"
             value={kms}
             onChange={this.handleChange}/>
         </div>
         <div className="form-group">
             <label>Year of Manufacture</label>
             <input type="text" className="form-control" id="year" 
             name="year" placeholder="Enter year"
             value={year}
             onChange={this.handleChange}/>
         </div>
       <div className="row">
        <div className="col-6">
            <h6>Model</h6>
        {this.makeDropDown(models,model,"model","Select Model")}
        </div>
        <div className="col-6">
            <h6>Color</h6>
        {this.makeDropDown(colors,color,"color","Select Color")}
        </div>
       </div>
      
       
       
 <button className="btn btn-primary text-center m-1 "
  onClick={this.handleSubmit}>Submit</button>
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
export default CarAdd;