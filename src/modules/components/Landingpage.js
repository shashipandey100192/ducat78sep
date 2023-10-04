import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import Mylocaluserdata from './Mylocaluserdata';
const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100
  }
];
const w = 1000;

function Landingpage() {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-12'>
          <p>Dashboard</p>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-3'>
          <div className="card text-bg-success mb-3">
            <div className="card-header">Header</div>
            <div className="card-body">
              <h5 className="card-title">Primary card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
        <div className='col-md-3'>
          <div className="card text-bg-warning mb-3">
            <div className="card-header">Header</div>
            <div className="card-body">
              <h5 className="card-title">Primary card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
        <div className='col-md-3'>
          <div className="card text-bg-info mb-3">
            <div className="card-header">Header</div>
            <div className="card-body">
              <h5 className="card-title">Primary card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
        <div className='col-md-3'>
          <div className="card text-bg-danger mb-3">
            <div className="card-header">Header</div>
            <div className="card-body">
              <h5 className="card-title">Primary card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-8 bg-light shadow'>
          <div className='border p-2'>
            <h2 className='text-center'>Recharts</h2>
            <BarChart
              width={w}
              height={400}
              data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              {/* <YAxis /> */}
              <Tooltip />
              <Legend />
              <Bar dataKey="amt" fill="red" />
              <Bar dataKey="pv" fill="green" />
              <Bar dataKey="uv" fill="#82ca9d" />
            </BarChart>
          </div>
        </div>
        <div className='col-md-4 bg-light shadow'>
          <section className='border p-2'>
            <h1>graph</h1>
              <Mylocaluserdata/>

          </section>
        </div>
      </div>


    </div>
  )
}

export default Landingpage