import React, {Component} from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import PersonNavbar from "./personNavBar";
import Persons from "./persons";
import Person from "./person";
import AddPerson from "./addPerson";
import DeletePerson from "./deletePerson";

class MainCompPerson extends Component{
    render(){
        return(
            <div className="container">
        <PersonNavbar />
        <Switch>
       
      <Route path="/persons/add" component={AddPerson}/>
      <Route path="/persons/:id/delete" component={DeletePerson}/>
      <Route path="/persons/:id/edit" component={AddPerson}/>
        <Route path="/persons/:id" component={Person}/>
        <Route path="/persons" component={Persons}/>
    
        <Redirect from="/" to="/persons"/>
        </Switch>
            </div>
        )
    }

}
export default MainCompPerson;