import React from 'react'
import { Link } from 'react-router-dom'
import './HomePage.css'

export default function HomePage() {
  return (
    <div>
        <div className="card">
            <div className="card-body">
            <h5 className="card-title">card-title</h5>
            <p className="card-text">card-text</p>
            <p>date of the creation</p>
            <Link to='/ShowOne' className="card-link">See More</Link>
            </div>
        </div>
    </div>
  )
}
