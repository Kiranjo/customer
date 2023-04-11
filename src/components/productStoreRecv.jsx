import React, {Component} from "react";
import { Route, Switch, Redirect } from "react-router-dom";

class ProductStoreRecv extends Component{
    
    handleChange=(e)=>{
        const {currentTarget: input}=e;
        let s1={...this.props};
        input.type === "checkbox"?
        (s1.product[input.name]=input.checked):
        s1.product[input.name]=input.value;
      //  if(input.name === "country") s1.person.city="";
        //if(!s1.person.passport) s1.person.passportNumber="";
        this.setState(s1);
      }
      updateCBs=(checked, value,arr=[])=>{
        if(checked) arr.push(value);
        else{
            let index=arr.findIndex((ele)=>ele===value);
            if(index>=0) arr.splice(index,1);
        }
        return arr;
      }
      handleSubmit=(e)=>{
        e.preventDefault();
        console.log(this.props.product);
      
        if(this.props.product.code=="")
            window.alert("Select Product Code")
            else if(this.props.product.quantity=="")
            window.alert("Enter Product Quantity");
        else if(this.props.product.date=="")
         window.alert("Enter date");
        else
        this.props.onSubmitStock(this.props.product);
      }

    
    render(){
        let {products,product,handleGoBack}=this.props;
        let {code="",year="",month="",date="",quantity=""}=product;
        let years=[];  
        for (let i=1900;i<2025;i++){
            years.push(i);
        }

        let months=["January","February","March","April","May","June","July",
    "August","September","October","November","December"];
    let dates=[];
    if(year!=""){
    if(month=="January"|| month=="March" || month=="May"|| month=="July" || month=="August"||
    month=="October"|| month=="December"){
    for (let i=1;i<=31;i++){
            dates.push(i);
        }
    }
    else if(month=="April"||month=="June"||month=="September"||month=="November"){
        for (let i=1;i<=30;i++){
            dates.push(i);
        }

    }
    else if(month=="February"){
        if((year%4==0 || year %400==0) && year%100!=0){
            for (let i=1;i<=29;i++){
                dates.push(i);  }
        }
        else{
            for (let i=1;i<=28;i++){
                dates.push(i);
            }  
        }

    }
    else{
        dates=[];
    }
}

       
        return(
            <div className="container">
        <h5>Select the product whose stock have been received</h5>
        <div className="form-group">
            <select className="form-control" name="code"
            value={code}  onChange={this.handleChange} >
                <option selected value="">Select Product Code</option>
            {products.map((y1)=>(
                <option>{y1.code}</option>
            ))}
            </select>
        </div>
        <div className="form-group">
            <label>Stocks Received</label>
            <input type="text" className="form-control" id="quantity" 
            name="quantity" placeholder=""
            value={quantity}
            onChange={this.handleChange}/>
        </div>
        <div className="row">
        <div className="form-group col-3 m-2">
            <select className="form-control" name="year"
            value={year}  onChange={this.handleChange} >
                <option selected value="">Select Year</option>
            {years.map((y1)=>(
                <option>{y1}</option>
            ))}
            </select>
        </div>
        <div className="form-group col-3 m-2">
            <select className="form-control" name="month"
            value={month}  onChange={this.handleChange} >
                <option selected value="">Select Month</option>
            {months.map((y1)=>(
                <option>{y1}</option>
            ))}
            </select>
        </div>
        <div className="form-group col-3 m-2">
            <select className="form-control" name="date"
            value={date}  onChange={this.handleChange} >
                <option selected value="">Select Date</option>
            {dates.map((y1)=>(
                <option>{y1}</option>
            ))}
            </select>
        </div>
        </div>
        <button className="btn btn-primary m-1" 
       onClick={this.handleSubmit}>Submit</button><br/>
        <button className="btn btn-primary m-1" 
        onClick={()=>handleGoBack()}>Go Back to Home Page</button>
            </div>
            
        )
    }

}
export default ProductStoreRecv;