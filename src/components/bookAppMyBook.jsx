import React, {Children, Component} from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import queryString from "query-string";
import http from "./httpService.js";
import BookAppLeft from "./bookAppLeft.jsx";
import BookAppNavBar from "./bookAppNavbar.jsx";


class BookAppMyBook extends Component{
    render(){
        let {myBooks,handleRemoveBook}=this.props;
        return(
            <div className="container">
           {myBooks.length==0? 
           <h3 className="bg-info text-warning text-center" >No Book added to MyBooks</h3>:
         
            <div className="row border text-center">
                  <h3 className="bg-info text-warning text-center">My Books List</h3>
          {myBooks.map((itm,index)=>(
            <div className="col-3 border bg-success">
                <img src={itm.volumeInfo.imageLinks.thumbnail}></img>
                <h5>{itm.volumeInfo.title}</h5>
                {itm.volumeInfo.authors}  {itm.volumeInfo.categories} 
                <br/>
        <button className="btn btn-secondary btn-sm m-1 text-white" 
        onClick={()=>handleRemoveBook(itm.id,index)}>
            Remove from MYBooks</button>
        </div>
          ))}
      </div>}
      </div>
            
        )
    }

}
export default BookAppMyBook;