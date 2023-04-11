import React, {Component} from "react";

class ViewQuesPaper extends Component{
    state={
        pName:"",
    }
    handleChange=(e)=>{
        let s1={...this.state};
        let paperName={};
       paperName[e.currentTarget.name]=e.currentTarget.value;
       console.log(paperName);
       s1.pName=paperName.name;
       console.log(s1.pName);
        this.setState(s1);
    }

    render(){
    let {selectedQuesPaper,handleHomeBtn}=this.props;
    let {name,ques}=selectedQuesPaper;
    let {pName}=this.state;
    let selQues=selectedQuesPaper.filter((sq)=>sq.name==pName);
    console.log(selQues);

      return(
        <div className="container">

      <button className="btn btn-primary btn-sm" onClick={()=>handleHomeBtn()}>Home</button>
      <div className="form-group">
            <select 
            className="form-control"
            name="name"
            value={name}
            onChange={this.handleChange}
          >
            
            <option value="">Choose Paper</option>
            {selectedQuesPaper.map((c1)=>(
                <option>{c1.name}</option>
            ))}
            </select>
        </div>
        <h3>Question Paper</h3>
        {selQues.map((sq)=>(
            <React.Fragment>
                <h5>Name :{sq.name}</h5>
                <ul>
            {sq.ques.map((qs,index)=>(
                <li>Q {index+1}. { qs}</li>
            ))}

                    
                </ul>

            </React.Fragment>
        ))}

   
     
        </div>
      )
     
    }
    makeDropDown=(arr,value,name,label)=>(    
        <div className="form-group mt-2">
                <select className="form-control" name={name}
               value={value}  onChange={this.handleChange} >
                    <option value="">{label}</option>
                {arr.map((opt)=>(
                    <option>{opt}</option>
                ))}
                </select>
            </div>
          
        );
    
}
export default ViewQuesPaper;