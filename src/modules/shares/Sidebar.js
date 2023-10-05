import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <div className="flex-shrink-0 p-3">
    <Link to="/" className="d-flex align-items-center pb-3 mb-3 link-body-emphasis text-decoration-none border-bottom">
      <span className="fs-5 fw-semibold">Sidebar</span>
    </Link>
    <ul className="list-unstyled ps-0">
      <li className="mb-1">
        <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="false">
          Electronics
        </button>
        <div className="collapse" id="home-collapse">
          <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li><Link to="mobile" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Mobile</Link></li>
            <li><Link to="leptop" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Leptop</Link></li>
            <li><Link to="computer111111" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Computer</Link></li>
          </ul>
        </div>
      </li>
      <li className="mb-1">
        <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
          Dashboard
        </button>
        <div className="collapse" id="dashboard-collapse">
          <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li><Link to="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Overview</Link></li>
            <li><Link to="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Weekly</Link></li>
            <li><Link to="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Monthly</Link></li>
            <li><Link to="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Annually</Link></li>
          </ul>
        </div>
      </li>
      <li className="mb-1">
        <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="false">
          Orders
        </button>
        <div className="collapse" id="orders-collapse">
          <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li><Link to="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">New</Link></li>
            <li><Link to="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Processed</Link></li>
            <li><Link to="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Shipped</Link></li>
            <li><Link to="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Returned</Link></li>
          </ul>
        </div>
      </li>
      <li className="border-top my-3"></li>
     
    </ul>
  </div>
  )
}

export default Sidebar