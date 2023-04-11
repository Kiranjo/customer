import React, {Component} from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import StudentNavBar from "./studentNavBar";
import Students from "./students";
import Student from "./student";
import CourseDelete from "./courseDelete";
import AddStudent from "./addStudent";

class StudentMainComp extends Component{
    render(){
        return(
            <div className="container">
        <StudentNavBar />
        <Switch>
       
     {/* <Route path="/persons/add" component={AddPerson}/>
      <Route path="/persons/:id/delete" component={DeletePerson}/>
      <Route path="/persons/:id/edit" component={AddPerson}/>
        <Route path="/persons/:id" component={Person}/>*/}
          <Route path="/students/course/:name" component={Students}/>
         <Route path="/students/add" component={AddStudent}/>
     <Route path="/students/:id/delete" component={CourseDelete}/>
     <Route path="/students/:id/edit" component={AddStudent}/>
        <Route path="/students/:id" component={Student}/>
        <Route path="/students" component={Students}/>
    
        <Redirect from="/" to="/students"/>
        </Switch>
            </div>
        )
    }

}
export default StudentMainComp;