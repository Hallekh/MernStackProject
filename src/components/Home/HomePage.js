import React from 'react'
import './HomePage.css'

export default function HomePage() {
  return (
    <div>
        <div class="card">
            <div class="card-body">
            <h5 class="card-title">card-title</h5>
            <p class="card-text">card-text</p>
            <p>date of the creation</p>
            <a href='/ShowOne' className="card-link">See More</a>
            </div>
        </div>
    </div>
  )
}
