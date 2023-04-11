import React, {Children, Component} from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import queryString from "query-string";
import http from "./httpService.js";
import BookSiteNavBar from "./bookSiteNavbar";
import NewArrivals from "./newArrivals";
import Fiction from "./fiction";
import Mystery from "./mystery";
import Management from "./management";
import AllBooks from "./allBooks";
import BookSiteChildren from "./bookSitechildren";
import BookInfo from "./bookInfo.jsx";
class BookSiteMainComp extends Component{
    render(){
        return(
            <div className="container">
        <BookSiteNavBar />
        <Switch>
       
      <Route path="/book/new" component={NewArrivals}/>
      <Route path="/book/:id" component={BookInfo}/>

        <Route path="/books/children" component={BookSiteChildren}/>
        <Route path="/books/fiction" component={Fiction}/>
        <Route path="/books/mystery" component={Mystery}/>
        <Route path="/books/management" component={Management}/>
        <Route path="/booksapp/books" component={AllBooks}/>
       
    
        <Redirect from="/" to="/booksapp/books"/>
        </Switch>
            </div>
        )
    }

}
export default BookSiteMainComp;