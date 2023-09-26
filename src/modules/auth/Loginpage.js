import React from 'react';
import { Link } from 'react-router-dom';

function Loginpage() {
  return (
    <div className='container shadow mt-3 p-5 border reg bg-light'>
            <div className='row'>
                <div className='col-12 text-center'>
                    <h1>User Login Page</h1>
                </div>
                
                <div className='col-md-12 mt-3'>
                    <label class="form-label">Email id</label>
                    <input type="email" class="form-control" />
                </div>
                <div className='col-md-12 mt-3'>
                    <label class="form-label">Password</label>
                    <input type="password" class="form-control" />
                </div>
                
                
                <div className='col-md-12 mt-3 text-center'>
                   <button className='btn btn-success'>Login</button>
                   <Link className='btn ms-3' to="landing">Dashboard</Link>
                </div>
            </div>
        </div>
  )
}

export default Loginpage