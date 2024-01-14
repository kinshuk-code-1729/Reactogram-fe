import React from 'react'
import './Navbar.css'
import logo from '../Images/logo.png'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar bg-light shadow-sm">
                <div className="container-fluid">
                    <a className="navbar-brand ms-5">
                        <img alt="logo" src={logo} height="45px" />
                    </a>
                    <form className="d-flex" role="search">
                        <input className="searchbox form-control me-2 text-muted" type="search" placeholder="Search" />
                        <a className="nav-link text-dark fs-5" href="#"><i className="fa-solid fa-house mx-2"></i></a>
                        <a className="nav-link text-dark fs-5" href="#"><i className="fa-regular fa-heart mx-2"></i></a>
                        <a className="nav-link text-dark fs-5" href="#"><i className="fa-solid fa-circle mx-2"></i></a>
                    </form>
                </div>
            </nav>
        </div>
    )
}

export default Navbar