import React, {Component} from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import BookSiteMainComp from "./cricketNavbar";

import queryString from "query-string";
import http from "./httpService.js";
class BookInfo extends Component{
    state={book:{}};
    async componentDidMount(){
        let {id}=this.props.match.params;
        let response=await http.get(`/booksapp/book/${id}`);
        console.log(response);
        let {data}=response;
        this.setState({book :data});
    }
    render(){
        let {book}=this.state;
        let {data={}}=book;
        console.log(book.name);
      
        return(
            <div className="container">
        <h4>Book : {book.name}</h4>
       <div className="row border">
       <div className="col-2">  Author : </div>
       <div className="col-8">{book.author}</div>
       </div>
       <div className="row border">
       <div className="col-2">   Genere : </div>
       <div className="col-8"> {book.genre}</div>
       </div>
       <div className="row border">
       <div className="col-2">  Description : </div>
       <div className="col-8"> {book.description}</div>
       </div>
       <div className="row border">
       <div className="col-2">   Blurb : </div>
       <div className="col-8"> {book.blurb}</div>
       </div>
       <div className="row border">
       <div className="col-2">  Review : </div>
       <div className="col-8"> {book.review}</div>
       </div>
       <div className="row border">
       <div className="col-2">  Price : </div>
       <div className="col-8"> {book.price}</div>
       </div>
       <div className="row border">
       <div className="col-2">   Rating : </div>
       <div className="col-8"> {book.avgrating}</div>
       </div>
     
            </div>
        )
    }

}
export default BookInfo;