import React, {Children, Component} from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import queryString from "query-string";
import http from "./httpService.js";
import { Link } from "react-router-dom";
import BookAppLeft from "./bookAppLeft.jsx";
import BookAppNavBar from "./bookAppNavbar.jsx";

class BookAppSearchPage extends Component{
    state={
        data:{},
        startIndex:0,
        maxResult:0,
        endIndex:0,
    }
    async fetchData(){
        let queryParams = queryString.parse(this.props.location.search);
        let searchStr=this.makeSearchString(queryParams); 
        let response= await http.get(`?q=${this.props.searchItem}&${searchStr}`);
        console.log(response);
        let {data}=response;
        this.setState({data: data});
    }
    componentDidMount(){
        this.fetchData();
    }
    componentDidUpdate(prevProps,prevState){
        if(prevProps !==this.props) this.fetchData();
    }
    handlePage=(incr)=>{
        let queryParams=queryString.parse(this.props.location.search);
        let {startIndex="0",maxResult="8"}=queryParams;
        let newPage= +startIndex + incr;
        queryParams.startIndex= newPage;
        queryParams.maxResult=this.state.endIndex;
        this.state.startIndex=queryParams.startIndex;
        this.state.endIndex=queryParams.maxResult;
        console.log(queryParams);
        this.callURL("/books",queryParams);
    }
    callURL=(url,options)=>{
        console.log(url);
        console.log(options);
        let searchString=this.makeSearchString(options);
        this.props.history.push({
            pathName: url,
            search: searchString,
        });
    }
    handleOptionChange=(options)=>{
        options.startIndex="0";
        this.callURL("/books",options);
    }
    makeSearchString=(options)=>{
        console.log(options);
        let {searchText,startIndex,maxResult,langRestrict,filter,printType,orderBy}=options;
        let searchStr="";
        searchStr=this.addToQueryString(searchStr,"searchText",this.props.searchItem);
        searchStr=this.addToQueryString(searchStr,"startIndex",startIndex);
        searchStr=this.addToQueryString(searchStr,"maxResult",maxResult);
        searchStr=this.addToQueryString(searchStr,"langRestrict",langRestrict);
        searchStr=this.addToQueryString(searchStr,"filter",filter);
        searchStr=this.addToQueryString(searchStr,"printType",printType);
        searchStr=this.addToQueryString(searchStr,"orderBy",orderBy);
        console.log(searchStr);
        return searchStr;
    }
    addToQueryString=(str,paramName,paramValue)=>{
        return(
    paramValue ? str ? `${str}&${paramName}=${paramValue}`:
    `${paramName}=${paramValue}`:str)};

  
    render(){
        let {items=[]}=this.state.data;
        let {searchItem}=this.props;
        let {startIndex,maxResult}=this.state;
        let {handleAddBook,booksAdded=[],handleRemoveBook,myBooks, seloptions}=this.props;
        let queryParams=queryString.parse(this.props.location.search);
        let searchString=this.makeSearchString(queryParams);
        let size=+(seloptions.noOfpage);
        let endIndex=items.length>startIndex+size-1? startIndex+size-1:
        items.length-1;
        let items2=items.length>2? 
       items.filter((emp,index)=>index >=startIndex && index<=endIndex):items;
        console.log(items2);
        console.log(items);
        return(
            <div className="container">
      <div className="row">
        <div className="col-3">
        <BookAppLeft options={queryParams} onOptionChange={this.handleOptionChange} 
        seloptions={seloptions}/>
        </div>
        <div className="col-9">
            <h3 className="text-warning text-center">{searchItem} Books</h3>
            <h6 className="text-success">{startIndex+1}-{endIndex+1} entries </h6>
            <div className="row border text-center">
          {items2.map((itm,index)=>(
            <div className="col-3 border bg-success">
               <img src={itm.volumeInfo.imageLinks.thumbnail}></img>
                <h5>{itm.volumeInfo.title}</h5>
                {itm.volumeInfo.authors}  {itm.volumeInfo.categories} 
                <br/>
                {booksAdded.find((bk)=>bk==itm.id)?   
        <button className="btn btn-secondary btn-sm m-1 text-white" 
        onClick={()=>handleRemoveBook(itm.id,index)}>
            Remove from MYBooks</button>:
            <button className="btn btn-secondary btn-sm m-1 text-white" 
            onClick={()=>handleAddBook(itm.id,index,items)}>
                Add to MyBooks</button>}

                </div>
          ))}
          </div>
          <div className="row">
            <div className="col-2">{" "}{startIndex>1 ? (
                <button className="btn btn-primary btn-sm" onClick={()=>this.handlePage(-(seloptions.noOfpage))}>Prev</button>
            ):""}</div>
               <div className="col-8"></div>
        <div className="col-2">
            {" "}{endIndex < items.length-1 ? (
  <button className="btn btn-primary btn-sm" onClick={()=>this.handlePage(+(seloptions.noOfpage))}>Next</button>
            ):""}</div>
   
    </div>
  </div>
        </div>
</div>
          
        )
  
    }
}
export default BookAppSearchPage;