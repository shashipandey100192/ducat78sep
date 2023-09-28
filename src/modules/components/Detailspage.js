import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Detailspage() {
    const { id } = useParams();
    const [sing, upd] = useState({});
    const myapi = () => {
        axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`).then((d) => {
            console.log(d.data);
            upd(d.data);
        })
    }
    useEffect(() => {
        myapi();
    }, [])
    return (
        <div className='container mt-3'>
            <div className='row'>
                <div className='col-8'>
                    <h3>Call auto api when reload this page and get single record</h3>
                </div>
                <div className='col-4 text-end'>
                    <button className='btn btn-dark btn-sm'>Back</button>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-12'>
                    <div className="card">
                        <h5 className="card-header">{sing.id}</h5>
                        <div className="card-body">
                            <h5 className="card-title">UserId:{sing.userId}</h5>
                            <p className="card-text">{sing.title}</p>
                            <a href="#" className="btn btn-primary">{sing.completed===true ? "True" : "False"}</a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Detailspage