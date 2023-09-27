import React, { useState } from 'react';
import axios from 'axios';

function Myaxiospage() {
    const [sing,upd]=useState([]);
    const myapi = ()=>{
    axios.get('https://jsonplaceholder.typicode.com/todos').then((d)=>{
        console.log(d.data);
        upd(d.data);
    })

}


  return (
    <div className='container mt-3'>
        <div className='row'>
            <div className='col-md-3'>
                <button onClick={myapi} type='button'>api</button>

                {sing.map((p)=>{
                    return(
                        <p>{p.title}</p>

                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default Myaxiospage