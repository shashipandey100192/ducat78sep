import React from 'react'
import { Link } from 'react-router-dom'

function Mynavbar() {
    return (
        <div className='container-fluid shadow'>
            <div className='row'>
                <div className='col-12 g-0'>
                    <nav className="navbar navbar-expand-lg bg-body-secondary">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="#">Navbar</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                    </li>
                                    {/* <li className="nav-item">
                                        <Link className="nav-link" to="registor">registor</Link>
                                    </li> */}

                                    {/* <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Dropdown
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                            <li><hr className="dropdown-divider" /></li>
                                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                    </li> */}
                                    <li className="nav-item">
                                        <Link className="nav-link" to="myaxios">axios</Link>
                                    </li>
                                </ul>
                                <form className="d-flex" role="search">
                                <div className="dropdown me-5">
                                    <button className="btn  dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        User name
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item" to="/">Login</Link></li>
                                        <li><Link className="dropdown-item" to="registor">Registor</Link></li>
                                        <li><Link className="dropdown-item" to="/">Logout</Link></li>
                                    </ul>
                            </div>
                        </form>
                </div>
            </div>
        </nav>

                </div >
            </div >
        </div >
    )
}

export default Mynavbar