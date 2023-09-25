import React from 'react'

function Registorpage() {
    return (
        <div className='container shadow mt-3 p-5 border reg bg-light'>
            <div className='row'>
                <div className='col-12 text-center'>
                    <h1>User Registor Page</h1>
                </div>
                <div className='col-md-6 mt-3'>
                    <label class="form-label">UserName</label>
                    <input type="text" class="form-control" />
                </div>
                <div className='col-md-6 mt-3'>
                    <label class="form-label">Email id</label>
                    <input type="email" class="form-control" />
                </div>
                <div className='col-md-6 mt-3'>
                    <label class="form-label">Phone No</label>
                    <input type="text" class="form-control" />
                </div>
                <div className='col-md-6 mt-3'>
                    <label class="form-label">Address</label>
                    <input type="text" class="form-control" />
                </div>
                <div className='col-md-6 mt-3'>
                    <label class="form-label">Gender</label><br/>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio"/>
                        <label class="form-check-label">Male</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio"/>
                        <label class="form-check-label">Female</label>
                        
                    </div>
                </div>
                
                <div className='col-md-12 mt-3 text-center'>
                   <button className='btn btn-success'>Registor Now</button>
                   <button className='btn btn-danger ms-3'>Reset</button>
                </div>
            </div>
        </div>
    )
}

export default Registorpage