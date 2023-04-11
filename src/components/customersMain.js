import React, {Component} from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import CustomerNavbar from "./customerNavbar";
import CustomerShow from "./customerShow";
import CustomerAdd from "./customerAdd";
import CustomerDelete from "./customerDelete";


class CustomerMain extends Component{
    render(){
        return(
            <div className="container">
        <CustomerNavbar />
        <Switch>
        <Route path="/customers/add" component={CustomerAdd}/>
        <Route path="/customers/:id/delete" component={CustomerDelete}/>
      <Route path="/customers/:id/edit" component={CustomerAdd}/>
      
         <Route path="/customers" component={CustomerShow}/>
        <Redirect from="/" to="#"/>
        </Switch>
            </div>
        )
    }

}
export default CustomerMain;