import React from 'react'
import '../Navbar/Navbar.css'


export default function Navlogin() {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-dark">
            <div class="container">
            <a class="navbar-brand" href="/">MMC</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link navLogin" href="/">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link navLogin" href="/">Add Post</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link navLogin" href="/about">AboutUs</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link navLogin" href="/contact">ContactUs</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/">Hello, Halyna</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/logout">Logout</a>
                </li>
                </ul>
            </div>
            </div>
        </nav>
    </div>
  )
}
