import React from 'react'

function Mylocaluserdata() {
    const  mylocaldata = JSON.parse(localStorage.getItem("myformdata"));


  return (
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-12'>
            <table className="table table-bordered table-dark table-hover">
                        <thead>
                            <tr>
                                <th scope="col">s.no</th>
                                <th scope="col">UserName</th>
                                <th scope="col">Email id</th>
                            
                            </tr>
                        </thead>
                        <tbody>
                            {mylocaldata.map((p,i=1) => {
                                return (
                                    <tr key={++i}>
                                        <th scope="row">{++i}</th>
                                        <td>{p.username}</td>
                                        <td>{p.email}</td>
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

export default Mylocaluserdata