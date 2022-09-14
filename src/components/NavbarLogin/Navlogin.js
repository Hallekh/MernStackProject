import React from 'react'
import { Link } from 'react-router-dom'
import '../Navbar/Navbar.css'


export default function Navlogin() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container">
            <Link className="navbar-brand" to="/">MMC</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link navLogin" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link navLogin" to="/">Add Post</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link navLogin" to="/about">AboutUs</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link navLogin" to="/contact">ContactUs</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/">Hello, Halyna</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/logout">Logout</Link>
                </li>
                </ul>
            </div>
            </div>
        </nav>
    </div>
  )
}
