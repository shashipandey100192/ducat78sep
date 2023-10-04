import React, { useState } from 'react';
const mydata = [];

function Curstomvalidtion() {
const [fdata, sdata]=useState(
    {
        username:"",
        email:""
    }
);

const setdata = (e)=>{
    // console.log(e.target.value);
    const {name,value} = e.target;
    sdata((preval)=>{
      return{
        ...preval,
        [name]:value
      }
    })
  }  

  const mydatasubmit = ()=>{
    if(fdata.username==="" || fdata.email==="")
    {
        alert("fill property");
    }
    else{
        console.log(fdata);
        mydata.push(fdata);
        localStorage.setItem("myformdata",JSON.stringify(mydata));
        console.log(mydata);
        // window.location.href="/";
    }
   
  }




  return (
   
    <div className='container shadow mt-3 p-5 border reg bg-light'>
        <div className='row'>
            <div className='col-12 text-center'>
                <h1>User Registor Page</h1>
            </div>
            <div className='col-md-6 mt-3'>
                <label className="form-label">UserName</label>
                <input type="text" className="form-control" name='username' onChange={setdata} value={fdata.username}/>
                
            </div>
            <div className='col-md-6 mt-3'>
                <label className="form-label">Email id</label>
                <input type="email" className="form-control" name='email' onChange={setdata} value={fdata.email}/>
               
            </div>
            <div className='col-md-6 mt-3'>
                <label className="form-label">Phone No</label>
                <input type="text" className="form-control" pattern='[0-9]{10}'/>
               
            </div>
            <div className='col-md-6 mt-3'>
                <label className="form-label">Address</label>
                <input type="text" className="form-control"/>
            </div>
            <div className='col-md-6 mt-3'>
                <label className="form-label">Gender</label><br/>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" value="male"/>
                    <label className="form-check-label">Male</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" value="female"/>
                    <label className="form-check-label">Female</label>
                    
                </div>
            </div>
            
            <div className='col-md-12 mt-3 text-center'>
               <button className='btn btn-success' onClick={mydatasubmit}>Registor Now</button>
               <button className='btn btn-danger ms-3' type='reset'>Reset</button>
            </div>
        </div>
    </div>
   
  )
}

export default Curstomvalidtion