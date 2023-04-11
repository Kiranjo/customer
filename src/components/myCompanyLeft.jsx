import React, {Component} from "react";
import { Link } from "react-router-dom";
class MyCompanyLeft extends Component{
    state={

    };
    handleChange=(e)=>{
        console.log(e);
        let {currentTarget : input}=e;
        let options={...this.props.options};
       input.type=="checkbox"?
     options[input.name]=this.updateCBs(options[input.name],input.checked,input.value):
       options[input.name]= input.value;
       console.log(options);
        this.props.onOptionChange(options);
    };
    updateCBs=(inpValue,checked,value)=>{
        let inpArr=inpValue? inpValue.split(",") :[];
        if(checked) inpArr.push(value);
        else{
            let index=inpArr.findIndex((ele)=>ele===value);
            if(index>=0) inpArr.splice(index,1);
        }
        return inpArr.join(",");
    }
  


    render(){
        let {department="",designation=""}=this.props.options;
        let designations=["Manager","Trainee","President"];
        let {allOptions}=this.props;
       console.log(allOptions);
        return(
 <div className="row border bg-light">
    <div className="col-12">
        {this.showRadios(designations,designation,"designation","Designation")}
    </div>
    <div className="col-12">
{this.makeCheckBoxes(allOptions.department,department.split(","),"department","Department")}
    </div>
    
         </div>
                  
        )
    }
    makeCheckBoxes=(arr,values,name,label)=>(
        <React.Fragment>
      <label className="form-check-label font-weight-bold ">{label}</label>  
     {arr.map((opt)=>(  
         <div className="form-check" key={opt}>
      <input className="form-check-input" type="checkbox" name={name}
         value={opt}
         checked={values.findIndex((val)=>val==opt)>=0}
          onChange={this.handleChange} />
         <label className="form-check-label">{opt}</label>
     </div>
 
     ))}
             </React.Fragment>
         
    )
 
    showRadios=(arr,selVal,name,label)=>{  
        console.log(selVal);   
     return(   
         <React.Fragment>
              <label className="form-check-label font-weight-bold ">{label}</label>
     {arr.map((opt)=>(
         <div className="form-check ">
         <input className="form-check-input" type="radio" name={name} 
         value={opt}
         checked={selVal==opt} onChange={this.handleChange}/>
         <label className="form-check-label">{opt}</label>
     </div>
 
     ))}
     </React.Fragment>
     )
     }
}
export default MyCompanyLeft;