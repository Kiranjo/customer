import React, {Children, Component} from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import queryString from "query-string";
import http from "./httpService.js";
import BookAppNavBar from "./bookAppNavbar.jsx";
import BookAppHarry from "./bookAppHarry.jsx";
import BookAppAgatha from "./bookAppAgatha.jsx";
import BookAppPrem from "./bookAppPrem.jsx";
import BookAppJane from "./bookAppJane.jsx";
import BookAppMyBook from "./bookAppMyBook.jsx";
import BookAppSetting from "./bookAppSetting.jsx";
import BookAppSearchP from "./bookAppSearchP.jsx";
import BookAppSearchPage from "./bookAppSearchPage.jsx";

class BookAppMain extends Component{
    state={
        booksAdded:[],
        myBooks:[],
        searchItem:"",
        selectedOptions:[],
        options:{printType:true,language:true,filterS:true,orderBy:true,noOfpage:8},
       
    }
    handleAddBook=(id,index,items)=>{
        let s1={...this.state};
        let find=items.find((itm)=>itm.id==id);
        if(find){
        s1.myBooks.push(find);
        }
        s1.booksAdded.push(id);
        this.setState(s1);
    }
    handleRemoveBook=(id,index)=>{
        let s1={...this.state};
        let idx=s1.booksAdded.findIndex((bk)=>bk==id);
        s1.booksAdded.splice(idx,1);
        s1.myBooks.splice(idx,1);
        this.setState(s1);
    }
    handleOptionChange=(options)=>{
      this.state.selectedOptions.push(options);
      console.log(this.state.selectedOptions);
      this.state.options=options;
      console.log(this.state.options);
    }
    handleSearchChange=(opt)=>{
        this.state.searchItem=opt;
    }
    render(){
        let {booksAdded,myBooks,searchItem,selectedOptions,options}=this.state;
        let {printType="",language="",filterS="",orderBy="",noOfpage=""}=options;
        return(
            <div className="container">
        <BookAppNavBar/>
        <Switch>
        <Route path="/books/MyBook"
        render={(props)=><BookAppMyBook {...props} myBooks={myBooks} seloptions={options} 
        handleRemoveBook={this.handleRemoveBook}/> }/>
      
        <Route path="/books/setting"
         render={(props)=><BookAppSetting {...props} options={options} 
         onOptionChange={this.handleOptionChange}/>}/>
    
        <Route path="/books/Premchand"
           render={(props)=><BookAppPrem {...props} handleAddBook={this.handleAddBook}
           booksAdded={booksAdded} handleRemoveBook={this.handleRemoveBook} seloptions={options} 
           myBooks={myBooks}/>}/>

        <Route path="/books/Harry Potter" 
        render={(props)=><BookAppHarry {...props} handleAddBook={this.handleAddBook}
        booksAdded={booksAdded} handleRemoveBook={this.handleRemoveBook} 
        myBooks={myBooks} seloptions={options} />}/>

        <Route path="/books/Agatha Christie" 
           render={(props)=><BookAppAgatha {...props} handleAddBook={this.handleAddBook}
           booksAdded={booksAdded} handleRemoveBook={this.handleRemoveBook} 
           myBooks={myBooks} selectedOptions={selectedOptions} seloptions={options} />}/>
    
        
        <Route path="/books/Jane Austen" 
           render={(props)=><BookAppJane {...props} handleAddBook={this.handleAddBook}
           booksAdded={booksAdded} handleRemoveBook={this.handleRemoveBook} seloptions={options} 
           myBooks={myBooks}/>}/>
     
     
<Route path="/books" 
          render={(props)=><BookAppSearchPage {...props} searchItem={searchItem} options={{}} 
          seloptions={options}
          onOptionChange={this.handleSearchChange} 
          handleAddBook={this.handleAddBook}
           booksAdded={booksAdded} handleRemoveBook={this.handleRemoveBook} 
        myBooks={myBooks} />}/>  


       
        <Route path="/" 
          render={(props)=><BookAppSearchP {...props} options={{}} searchItem={searchItem}
          onOptionChange={this.handleSearchChange} />}
         />


        <Redirect from="/" to="/books/1"/>
        </Switch>
            </div>
        )
    }

}
export default BookAppMain;