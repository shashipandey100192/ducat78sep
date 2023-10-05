import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import Sidebar from '../shares/Sidebar';

function Myservicepage() {
  return (
    <div className='container-fluid mt-3'>
            <div className='row'>
                <div className='col-md-2'>
                    <div className='border p-2'>
                    <Sidebar/>
                    </div>
                    
                </div>
                <div className='col-md-10'>
                <div className='border p-2'>
                    <h3>content page</h3>
                    <Outlet></Outlet>
                    </div>
                </div>
            </div>
            
        </div>
  )
}

export default Myservicepage