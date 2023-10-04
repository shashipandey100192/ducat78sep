import React from 'react';
import{useForm} from 'react-hook-form'

function Registorpage() {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const mysubmit = (data)=>{
        console.log(data);
        window.location.href="/";

    }


    return (
        <form onSubmit={handleSubmit(mysubmit)}>
        <div className='container shadow mt-3 p-5 border reg bg-light'>
            <div className='row'>
                <div className='col-12 text-center'>
                    <h1>User Registor Page</h1>
                </div>
                <div className='col-md-6 mt-3'>
                    <label className="form-label">UserName</label>
                    <input type="text" className="form-control" {...register("username",{required:true})}/>
                    {errors.username && <span className='text-danger'>username is required</span>}
                </div>
                <div className='col-md-6 mt-3'>
                    <label className="form-label">Email id</label>
                    <input type="email" className="form-control" {...register("email",{required:true})}/>
                    {errors.email && <span className='text-danger'>email is required</span>}
                </div>
                <div className='col-md-6 mt-3'>
                    <label className="form-label">Phone No</label>
                    <input type="text" className="form-control" {...register("phone",{required:true})} pattern='[0-9]{10}'/>
                    {errors.phone && <span className='text-danger'>phone No is required</span>}
                </div>
                <div className='col-md-6 mt-3'>
                    <label className="form-label">Address</label>
                    <input type="text" className="form-control" {...register("address")}/>
                </div>
                <div className='col-md-6 mt-3'>
                    <label className="form-label">Gender</label><br/>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" value="male" {...register("gender")}/>
                        <label className="form-check-label">Male</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" value="female" {...register("gender")}/>
                        <label className="form-check-label">Female</label>
                        
                    </div>
                </div>
                
                <div className='col-md-12 mt-3 text-center'>
                   <button className='btn btn-success'>Registor Now</button>
                   <button className='btn btn-danger ms-3' type='reset'>Reset</button>
                </div>
            </div>
        </div>
        </form>
    )
}

export default Registorpage