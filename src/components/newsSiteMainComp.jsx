import React, {Children, Component} from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import queryString from "query-string";
import http from "./httpService.js";
import NewsSiteNavBar from "./newsSiteNavBar.jsx";
import NewsSiteAll from "./newsSiteAll.jsx";
import NewsSiteSport from "./newsSiteSport.jsx";
import NewsSiteCricket from "./newsSiteCricket.jsx";
import NewsSiteEducation from "./newsSiteEducation.jsx";
import NewsSiteMovie from "./newsSiteMovie.jsx";

class NewsSiteMainComp extends Component{
    render(){
        return(
            <div className="container">
        <NewsSiteNavBar />
        <Switch>
       
      <Route path="/home" component={NewsSiteAll}/>
      <Route path="/&q=sport" component={NewsSiteSport}/>
      <Route path="/&q=cricket" component={NewsSiteCricket}/>
    
      <Route path="/&q=movies" component={NewsSiteMovie}/>
      <Route path="/&q=education" component={NewsSiteEducation}/>
    
        <Redirect from="/" to="/home"/>
        </Switch>
            </div>
        )
    }

}
export default NewsSiteMainComp;