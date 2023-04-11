import React, {Component} from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
class VegPizza extends Component{
    render(){
        let {pizzas}=this.props;
        let vegPizza=pizzas.filter((pz)=>pz.type=="Pizza"&& pz.veg=="Yes")
        return(
 <div className="container">
    <div className="row">
        <div className="col-8">
        {vegPizza.map((emp)=>(
          <div className="col-6 border bg-light">
            <img src={emp.image}/>

          </div>
        
      ))}
   
        </div>
        <div className="col-4">

  
   </div>
 
  </div>

  </div>    
           
        )
    }
}
export default VegPizza;