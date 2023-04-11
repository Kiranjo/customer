import React, {Component} from "react";
import { Route, Switch, Redirect } from "react-router-dom";

class ProductStoreNewProd extends Component{
    state={
        brands:
["Nestle", "Haldiram", "Pepsi", "Coca Cola", "Britannia",
 "Cadburys", "P&G", "Colgate", "Parachute",
"Gillete", "Dove", "Levis", "Van Heusen", "Manyavaar", "Zara"],
categories:["Food","Personal Care","Apparel"],
errors:{},
    };
    handleChange=(e)=>{
        const {currentTarget: input}=e;
        let s1={...this.props};
        input.type === "checkbox"?
        (s1.product[input.name]=input.checked):
        s1.product[input.name]=input.value;
      //  if(input.name === "country") s1.person.city="";
        //if(!s1.person.passport) s1.person.passportNumber="";
        this.setState(s1);
      }
      updateCBs=(checked, value,arr=[])=>{
        if(checked) arr.push(value);
        else{
            let index=arr.findIndex((ele)=>ele===value);
            if(index>=0) arr.splice(index,1);
        }
        return arr;
      }
      handleSubmit=(e)=>{
        e.preventDefault();
        let errors=this.validateAll();
        if(this.isValid(errors)){
        console.log(this.props.product);
        this.props.onSubmit(this.props.product);
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
        let {code, price, brand, category, specialOffer, limitedStock, quantity=0}=this.props.product;
        let errors={};
        errors.code=this.validateCode(code);
        errors.price=this.validatePrice(price);
        errors.category=this.validateCategory(category);
        errors.brand=this.validateBrand(brand);
        console.log(errors);
        return errors;
    }
    validateCode=(code)=>
    !code ? "Code must be entered":"";
    validatePrice=(price)=>
    !price ? "Price must be entered":"";
    validateCategory=(category)=>
    !category ? "Category must be selected":"";
    validateBrand=(brand)=>
    !brand ? "Brand must be selected":"";


    isFormValid=()=>{
        console.log("inside disable");
        let errors=this.validateAll();
        return this.isValid(errors);
    }
    render(){
  let {code, price, brand, category, specialOffer, limitedStock, quantity=0}=this.props.product;
  this.props.product.quantity=0;
  let {handleGoBack,editIndex,products}=this.props;
  let {categories,errors}=this.state;
  let brands=[];
 if(category=="Food")
 brands=products.filter((pr)=>pr.category=="Food");
 else if(category=="Personal Care")
 brands=products.filter((pr)=>pr.category=="Personal Care");
 else if(category=="Apparel")
 brands=products.filter((pr)=>pr.category=="Apparel");
 else
 brands=[];
 console.log(brands);
        return(
            <div className="container">
           <div className="form-group">
            <label>Product Code</label>
          {editIndex>=0? <input type="text" className="form-control disabled" id="code" 
            name="code" placeholder="Enter Product Code"
            value={code}/>:
            <input type="text" className="form-control " id="code" 
            name="code" placeholder="Enter Product Code"
            value={code}
            onChange={this.handleChange}/>
            }
           {errors.code ? <span className="text-dark bg-danger col-12">{errors.code}</span>:""}
        </div>
        <div className="form-group">
            <label>Price</label>
            <input type="text" className="form-control" id="price" 
            name="price" placeholder="Enter Product Price"
            value={price}
            onChange={this.handleChange}/>
           {errors.price ? <span className="text-dark bg-danger col-12">{errors.price}</span>:""}
        </div>
        <h5>Category</h5>
        {categories.map((m1)=>(
    <div className="form-check form-check-inline">
    <input className="form-check-input" type="radio" name="category" 
    value={m1}
    checked={category==m1} onChange={this.handleChange}/>
    <label className="form-check-label">{m1}</label>
 
</div>

))}<br/>
   {errors.category ? <span className="text-dark bg-danger col-12">{errors.category}</span>:""}


        <div className="form-group">
            <select className="form-control" name="brand"
            value={brand}  onChange={this.handleChange} >
                <option selected value="">Select Brand</option>
            {brands.map((y1)=>(
                <option>{y1.brand}</option>
            ))}
            </select>
     {errors.brand ? <span className="text-dark bg-danger col-12">{errors.brand}</span>:""}
        </div>
        <h5>Choose other info about the product</h5>
        <div className="form-check">
        <input className="form-check-input" type="checkbox" name="specialOffer"
        checked={specialOffer} onChange={this.handleChange} />
        <label className="form-check-label">Special Offer</label>
    </div>
    <div className="form-check">
        <input className="form-check-input" type="checkbox" name="limitedStock"
        checked={limitedStock} onChange={this.handleChange} />
        <label className="form-check-label">Limited Stock</label>
    </div>

        <button className="btn btn-primary m-1" 
       onClick={this.handleSubmit}>{editIndex>=0?"Edit Product":"Add Product"}</button><br/>
        <button className="btn btn-primary m-1" 
        onClick={()=>handleGoBack()}>Go Back to Home Page</button>

            </div>
        )
    }

}
export default ProductStoreNewProd;