import React from 'react'
import './Navbar.css'
import logo from '../Images/logo.png'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar bg-light shadow">
                <div className="container-fluid">
                    <a className="navbar-brand ms-5">
                        <img alt="logo" src={logo} height="45px" />
                    </a>
                    <form className="d-flex" role="search">
                        <input className="searchbox form-control me-2 text-muted" type="search" placeholder="Search" />
                        <a class="nav-link text-dark fs-5 px-2" href="#"><i class="fa-solid fa-house"></i></a>
                        <a class="nav-link text-dark fs-5 px-2" href="#"><i class="fa-regular fa-heart"></i></a>
                        <a class="nav-link text-dark fs-5 px-2" href="#"><i class="fa-solid fa-circle"></i></a>
                    </form>
                </div>
            </nav>
        </div>
    )
}

export default Navbar