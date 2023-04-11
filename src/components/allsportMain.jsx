import React, {Component} from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import CricketNavbar from "./cricketNavbar";
import AllSport from "./allSport";
import Cricket from "./cricket";
import Football from "./football";
import AddStar from "./addStar";
import ShowSport from "./showSport";
import queryString from "query-string";
import http from "./httpService.js";
class AllSportMain extends Component{
    render(){
        return(
            <div className="container">
        <CricketNavbar />
        <Switch>
       
      <Route path="/star" component={AddStar}/>
        <Route path="/stars/cricket" component={Cricket}/>
        <Route path="/stars/football" component={Football}/>
        <Route path="/details/:id" component={ShowSport}/>
        <Route path="/stars" component={AllSport}/>
    
        <Redirect from="/" to="/stars"/>
        </Switch>
            </div>
        )
    }

}
export default AllSportMain;