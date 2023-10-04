import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Myaxiospage() {
    const [sing, upd] = useState([]);
    const myapi = () => {
        axios.get('https://jsonplaceholder.typicode.com/todos').then((d) => {
            console.log(d.data);
            upd(d.data);
        })
    }
    useEffect(()=>{
        myapi();
    },[])


    return (
        <div className='container mt-3'>
            <div className='row'>
                <div className='col-8'>
                    <h3>Call auto api when reload this page </h3>
                    <h5>Total Records: {sing.length}</h5>
                </div>
                <div className='col-4 text-end'>
                    {/* <button className='btn btn-dark btn-sm'>Back</button> */}
                </div>
            </div>
            <div className='row'>
                <div className='col-md-12'>
                    {/* <button onClick={myapi} type='button'>api</button> */}
                    <table className="table table-bordered table-dark table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">UserId</th>
                                <th scope="col">Title</th>
                                <th scope="col">Status</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sing.map((p) => {
                                return (
                                    <tr key={p.id}>
                                        <th scope="row">{p.id}</th>
                                        <td>{p.userId}</td>
                                        <td>{p.title}</td>
                                        <td>{p.completed===true ? "True" : "False"}</td>
                                        <td>
                                            <Link to={`details/`+p.id} className='btn btn-info btn-sm'>view</Link>
                                            <Link to="ss" className='btn btn-warning ms-2 btn-sm'>Edit</Link>
                                            <Link to="ss" className='btn btn-danger ms-2 btn-sm'>Del</Link>
                                        </td>
                                    </tr>
                                )
                            })}

                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    )
}

export default Myaxiospage