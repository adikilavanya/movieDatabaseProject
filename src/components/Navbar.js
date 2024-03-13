import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">
      <h1>movieDB</h1>
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          movieDB
        </Link>
        <div className="navbar-links">
          <Link to="/" className="navbar-link">
            Popular
          </Link>
          <Link to="/top-rated" className="navbar-link">
            Top Rated
          </Link>
          <Link to="/upcoming" className="navbar-link">
            Upcoming
          </Link>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <button>Search</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
