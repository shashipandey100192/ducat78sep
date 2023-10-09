import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

function Loginpage() {
    const { loginWithRedirect } = useAuth0();
  return (
    <div className='container shadow mt-3 p-5 border reg bg-light'>
            <div className='row'>
                <div className='col-12 text-center'>
                    <h1>User Login Page</h1>
                </div>
                
                <div className='col-md-12 mt-3'>
                    <label className="form-label">Email id</label>
                    <input type="email" className="form-control" />
                </div>
                <div className='col-md-12 mt-3'>
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" />
                </div>
                
                
                <div className='col-md-12 mt-3 text-center'>
                   <button className='btn btn-success'>Login</button>
                   <Link className='btn ms-3' to="landing">Dashboard</Link>
                   <button className="btn btn-primary" onClick={() => loginWithRedirect()}>Log page</button>
                </div>
            </div>
        </div>
  )
}

export default Loginpage