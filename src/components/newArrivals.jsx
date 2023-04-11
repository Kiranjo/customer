import React, {Component} from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import BookSiteMainComp from "./cricketNavbar";

import queryString from "query-string";
import http from "./httpService.js";
class NewArrivals extends Component{
    state={
        book:{name:"",author:"",description:"",blurb:"",review:"",price:"",
            year:"",publisher:"",avgrating:"",genre:"",language:"",
            bestseller:"",newarrival:""},
      
        genres:["Fiction","Children","Mystery", "Management"],
        languages:["Latin", "English","French", "Others"],
        bestSellers:["Yes","No"],
        newArrivals:["Yes","No"],
        errors:{},
        
     };
     handleChange=(e)=>{
         const {currentTarget: input}=e;
         let s1={...this.state};
         s1.book[input.name]=input.value;
         this.handleValidate(e);
         this.setState(s1);
     }
     async postData(url,obj){
         let response=await http.post(url,obj);
         console.log(response);
         console.log( this.props.history.push("/books"));
         this.props.history.push("/books");
         
     }
     handleSubmit=(e)=>{
         e.preventDefault();
         let errors=this.validateAll();
         console.log(this.isValid(errors));
         if(this.isValid(errors)) 
         {
             console.log( this.postData("/booksapp/book",this.state.book));
             this.postData("/booksapp/book",this.state.book);
         }
         else{
             let s1={...this.state};
             s1.errors=errors;
             this.setState(s1);
         
         }
     }
     isValid=(errors)=>{
         //errors would have keys with non empty strings as values
         let keys=Object.keys(errors);
         console.log(keys);
         let count=keys.reduce((acc,curr)=>(errors[curr]? acc+1 : acc),0);
         console.log(count);
         return count===0;
     }
     validateAll=()=>{
        let {name,author,description,blurb,review,price,
            year,publisher,avgrating,genre,language,
            bestseller,newarrival}=this.state.book;
         let errors={};
         errors.name=this.validateName(name);
         errors.author=this.validateAuthor(author);
         errors.description=this.validateDesc(description);
         errors.blurb=this.validateBlurb(blurb);
         errors.review=this.validateReview(review);
         errors.price=this.validatePrice(price);
         errors.year=this.validateYear(year);
         errors.publisher=this.validatePublisher(publisher);
         errors.avgrating=this.validateRating(avgrating);
         errors.genre=this.validateGenre(genre);
         errors.language=this.validatelanguage(language);
         errors.bestseller=this.validateBest(bestseller);
         errors.newarrival=this.validateArrival(newarrival);
         console.log(errors);
         return errors;
     }
     validateName=(name)=>
     !name ? "Name must be entered":"";
    validateAuthor=(author)=>
     !author ? "Author must be entered":"";
     validateDesc=(description)=>
     !description ? "Description must be entered":"";
     validateBlurb=(blurb)=>
     !blurb ? "Blurb must be entered":"";
     validateReview=(review)=>
     !review ? "Review must be entered":"";
     validatePrice=(price)=>
     !price ? "Price must be entered":"";
     validateYear=(year)=>
     !year ? "Year must be entered":"";
     validatePublisher=(publisher)=>
     !publisher ? "publisher must be entered":"";
     validateRating=(avgrating)=>
     !avgrating ? "Rating must be entered":"";
     validateGenre=(genre)=>
     !genre ? "Genre must be selected":"";
     validatelanguage=(language)=>
     !language ? "Language must be selected":"";
     validateBest=(bestseller)=>
     !bestseller ? "bestseller must be selected":"";
     validateArrival=(newarrival)=>
     !newarrival ? "newArrival must be selected":"";
 
 
     isFormValid=()=>{
         console.log("inside disable");
         let errors=this.validateAll();
         return this.isValid(errors);
     }
 
     handleValidate=(e)=>{
         let {currentTarget: input}=e;
         let s1={...this.state};
         switch (input.name){
             case "name":
          s1.errors.name=this.validateName(input.value);
                 break;
          case "author":
           s1.errors.author=this.validateAuthor(input.value);
               break;
     case "description":
      s1.errors.description=this.validateDesc(input.value);
     break;
     case "blurb":
         s1.errors.blurb=this.validateBlurb(input.value);
                   break;
      case "review":
         s1.errors.review=this.validateReview(input.value);
                   break;
      case "price":
      s1.errors.price=this.validatePrice(input.value);
      break;
      case "year":
        s1.errors.year=this.validateYear(input.value);
      break;
      case "publisher":
        s1.errors.publisher=this.validatePublisher(input.value);
      break;
      case "avgrating":
        s1.errors.avgrating=this.validateRating(input.value);
      break;
      case "genre":
        s1.errors.genre=this.validateGenre(input.value);
      break;
      case "language":
        s1.errors.language=this.validatelanguage(input.value);
      break;
      case "bestseller":
        s1.errors.bestseller=this.validateBest(input.value);
      break;
      case "newarrival":
        s1.errors.newarrival=this.validateArrival(input.value);
      break;

             default:
                 break;
 
         }
         this.setState(s1);
     }
     render(){
         let {name,author,description,blurb,review,price,
         year,publisher,avgrating,genre,language,
         bestseller,newarrival}=this.state.book;
         const {genres,languages,errors,bestSellers,newArrivals}=this.state;
         return(
                  <div className="container text-center">
           <h3 className="">Create a new Book</h3>
               <div className="form-group row m-1" >
             <div className="col-2">    
            <label>Name</label></div>
            <div className="col-6">
             <input type="text" className="form-control" id="name" 
             name="name" placeholder="Enter Name"
             value={name}
             onChange={this.handleChange}/>
              {errors.name ? <span className="text-danger">{errors.name}</span>:""}
         </div>
         </div>
         <div className="form-group row m-1">
         <div className="col-2">    
            <label>Author</label></div>
            <div className="col-6">
             <input type="text" className="form-control" id="author" 
             name="author" placeholder="Enter Author Name"
             value={author}
             onChange={this.handleChange}/>
              {errors.author ? <span className="text-danger">{errors.author}</span>:""}
         </div></div>
         <div className="form-group row m-1">
         <div className="col-2">    
            <label>Description</label></div>
            <div className="col-6">
             <input type="text" className="form-control" id="description" 
             name="description" placeholder="Enter description"
             value={description}
             onChange={this.handleChange}/>
      {errors.description ? <span className="text-danger">{errors.description}</span>:""}
         </div></div>
         <div className="form-group row m-1">
         <div className="col-2">    
            <label>Blurb</label></div>
            <div className="col-6">
             <input type="text" className="form-control" id="blurb" 
             name="blurb" placeholder="Enter Blurb"
             value={blurb}
             onChange={this.handleChange}/>
      {errors.blurb ? <span className="text-danger">{errors.blurb}</span>:""}
         </div></div>
         <div className="form-group row m-1">
         <div className="col-2">    
            <label>Review</label></div>
            <div className="col-6">
             <input type="text" className="form-control" id="review" 
             name="review" placeholder="Enter Review"
             value={review}
             onChange={this.handleChange}/>
      {errors.review ? <span className="text-danger">{errors.review}</span>:""}
         </div></div>
         <div className="form-group row m-1">
         <div className="col-2">    
            <label>Price</label></div>
            <div className="col-6">
             <input type="text" className="form-control" id="price" 
             name="price" placeholder="Enter price"
             value={price}
             onChange={this.handleChange}/>
      {errors.price ? <span className="text-danger">{errors.price}</span>:""}
         </div></div>
         <div className="form-group row m-1">
         <div className="col-2">    
            <label>Year</label></div>
            <div className="col-6">
             <input type="text" className="form-control" id="year" 
             name="year" placeholder="Enter Year"
             value={year}
             onChange={this.handleChange}/>
      {errors.year ? <span className="text-danger">{errors.year}</span>:""}
         </div></div>
         <div className="form-group row m-1">
         <div className="col-2">    
            <label>Publisher</label></div>
            <div className="col-6">
             <input type="text" className="form-control" id="publisher" 
             name="publisher" placeholder="Enter Publisher"
             value={publisher}
             onChange={this.handleChange}/>
      {errors.publisher ? <span className="text-danger">{errors.publisher}</span>:""}
         </div></div>
         <div className="form-group row m-1">
         <div className="col-2">    
            <label>Rating</label></div>
            <div className="col-6">
             <input type="text" className="form-control" id="avgrating" 
             name="avgrating" placeholder="Enter Rating"
             value={avgrating}
             onChange={this.handleChange}/>
      {errors.avgrating ? <span className="text-danger">{errors.avgrating}</span>:""}
         </div></div>
 {this.makeDropDown(genres,genre,"genre","Select genre","Genre",errors)}
  {this.makeDropDown(languages,language,"language","Select Language","Language",errors)}
        <br/>
    
  {this.makeRadios("BestSeller",bestSellers,"bestseller",bestseller,errors)}
  {this.makeRadios("NewArrival",newArrivals,"newarrival",newarrival,errors)}
        <button className="btn btn-primary text-center"
         onClick={this.handleSubmit}>Create Book</button>
             </div>
         )
     }
     makeDropDown=(arr,value,name,label,first,errors={})=>(    
         <div className="form-group row m-1">
         <div className="col-2">    
            <label>{first}</label></div>
            <div className="col-6">
                 <select className="form-control" name={name}
                value={value}  onChange={this.handleChange} >
                     <option value="">{label}</option>
                 {arr.map((opt)=>(
                     <option>{opt}</option>
                 ))}
                 </select>
       {name=="genre"?errors.genre? <span className="text-danger">{errors.genre}
       </span>:"":
     name=="language"?errors.language? <span className="text-danger">{errors.language}
       </span>:"":""}
             </div>
             </div>
           
         );

         makeRadios=(label,arr,name,selVal,errors)=>{     
            return(   
                <div className="form-group row m-1">
         <div className="col-2">    
       <label className="form-check-label font-weight-bold ">{label}</label><br/>
       </div>
       <div className="col-6">
            {arr.map((opt)=>(
                <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name={name} 
                value={opt}
                checked={selVal===opt} onChange={this.handleChange}/>
                <label className="form-check-label">{opt}</label>
            </div>
        
            ))}
     {name=="bestseller"?errors.bestseller?
      <span className="text-danger">{errors.bestseller}
       </span>:"":
     name=="newarrival"?errors.newarrival?
      <span className="text-danger">{errors.newarrival}
       </span>:"":""}
       </div> </div>
            )
            }

}
export default NewArrivals;