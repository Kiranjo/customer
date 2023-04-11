import React, {Component} from "react";
import { Route, Switch, Redirect } from "react-router-dom";


import CarNavbar from "./carNavbar";
import CarAdd from "./carAdd";
import CarHome from "./carHome";
import CarDelete from "./carDelete";


class CarMainComp extends Component{
    render(){
        return(
            <div className="container">
        <CarNavbar/>
        <Switch>
      <Route path="/car" component={CarAdd}/>
      <Route path="/cars/:id/delete" component={CarDelete}/>
      <Route path="/cars/:id/edit" component={CarAdd}/>
      <Route path="/cars" component={CarHome}/>
        </Switch>
            </div>
        )
    }

}
export default CarMainComp;