import React, {Component} from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import BookSiteMainComp from "./cricketNavbar";
import { Link } from "react-router-dom";
import queryString from "query-string";
import http from "./httpService.js";
import BookSiteLeftPanel from "./bookSiteLeftPanel";
class Mystery extends Component{
        state ={data:{},
        languages:["Latin", "English","French", "Others"],
        bestSellers:["Yes","No"],
    };
    
    async fetchData(){
        let queryParams = queryString.parse(this.props.location.search);
       let searchStr=this.makeSearchString(queryParams);
      // let {page="1"}=queryParams;
       let response= await http.get(`/booksapp/books?${searchStr}`);
        console.log(response);
        let {data}=response;
        this.setState({data: data});
    }
    componentDidUpdate(prevProps,prevState){
        if(prevProps !==this.props) this.fetchData();
    }
    componentDidMount(){
        this.fetchData();
    }
    handlePage=(incr)=>{
        let queryParams=queryString.parse(this.props.location.search);
        let {page="1"}=queryParams;
        let newPage= +page + incr;
        queryParams.page= newPage;
        console.log(queryParams);
        this.callURL("/books",queryParams);
    }
    handleOptionChange=(options)=>{
        options.page="1";
        this.callURL("/books",options);
    }
    
    callURL=(url,options)=>{
        let searchString=this.makeSearchString(options);
        this.props.history.push({
            pathName: url,
            search: searchString,
        });
    }
    makeSearchString=(options)=>{
       // console.log(options);
        let {page,bestseller,language}=options;
        let searchStr="";
        searchStr=this.addToQueryString(searchStr,"page",page);
        searchStr=this.addToQueryString(searchStr,"bestseller",bestseller);
        searchStr=this.addToQueryString(searchStr,"language",language);
        console.log(searchStr);
        return searchStr;
    }
    addToQueryString=(str,paramName,paramValue)=>
    paramValue ? str ? `${str}&${paramName}=${paramValue}`:
    `${paramName}=${paramValue}`:str;
    
    
        render(){
            const {pageInfo={},books=[],refineOptions={}}=this.state.data; 
            let {languages,bestSellers}=this.state;
          let {pageNumber,  numberOfPages, numOfItems,  totalItemCount}=pageInfo;   
        let {bestseller=[], language=[], publisher=[]}=refineOptions;
        let books1=books.filter((bk)=>bk.genre=="Mystery");
          let queryParams=queryString.parse(this.props.location.search);
          let yesVal="";
    let yes=bestseller.reduce((acc,curr)=>{
        if(curr.refineValue=="Yes")
        return yesVal=curr.totalNum;
      },"")
   let noVal="";
   let no=bestseller.reduce((acc,curr)=>{
       if(curr.refineValue=="No")
       return noVal=curr.totalNum;
     },"")
     let latinVal="";
     let latin=language.reduce((acc,curr)=>{
        if(curr.refineValue=="Latin")
        return latinVal=curr.totalNum;
      },"")
      let EngVal="";
      let eng=language.reduce((acc,curr)=>{
         if(curr.refineValue=="English")
         return EngVal=curr.totalNum;
       },"")
       let FrenchVal="";
       let french=language.reduce((acc,curr)=>{
          if(curr.refineValue=="French")
          return FrenchVal=curr.totalNum;
        },"")
        let OtherVal="";
        let other=language.reduce((acc,curr)=>{
           if(curr.refineValue=="Other")
           return OtherVal=curr.totalNum;
         },"")

        
    
       
                 return(
          <div className="container">
           <div className="row">
         <div className="col-3">
         <BookSiteLeftPanel options={queryParams} languages={languages}
         bestSellers={bestSellers}  yesVal={yesVal} noVal={noVal}
         latinVal={latinVal} EngVal={EngVal} FrenchVal={FrenchVal}
         OtherVal={OtherVal}
          onOptionChange={this.handleOptionChange}/>
            </div>  
            <div className="col-9">
             <br/>
    <h6>{pageNumber} to {numberOfPages} of {totalItemCount}</h6>
             <div className="row bg-info text-white border">
                 <div className="col-2 border">Title</div>
                 <div className="col-2 border">Author</div>
                 <div className="col-2 border">Language</div>
                 <div className="col-2 border">Genre</div>
                 <div className="col-2 border">Price</div>
                 <div className="col-2 border">Bes</div>
             </div>
       {books1.map((sp)=>(
             <div className="row">
                 <div className="col-2 border">
                 <Link to ={`/book/${sp.bookid}`}>{sp.name}</Link></div>
                 <div className="col-2 border">{sp.author}</div>
                 <div className="col-2 border">{sp.language}</div>
                 <div className="col-2 border">{sp.genre}</div>
                 <div className="col-2 border">{sp.price}</div>
                 <div className="col-2 border">{sp.bestseller}</div>
             </div>
        ))}
          <div className="row">
             <div className="col-2">
                 {pageNumber > 1 ? (
                     <button className="btn btn-primary btn-sm" 
                     onClick={()=>this.handlePage(-1)}>Prev</button>
                 ):("")}  
             </div>
             <div className="col-8"></div>
             <div className="col-2">
             {numberOfPages > pageNumber ? (
                     <button className="btn btn-primary btn-sm" 
                     onClick={()=>this.handlePage(1)}>Next</button>
                 ):("")}    
             </div>
          </div>
             </div>
             </div> 
             </div> 
                 )
             }

}
export default Mystery;