import React, { Component } from 'react'
import { Link } from "react-router-dom";
import './Header.css'
class Header extends Component {
  render() {
    return (
      <nav
        className="Header navbar fixed-top navbar-expand-lg navbar-dark navcustom mx-1 m-sm-1" style={{
          backgroundColor: `#DD401E`,
        }}>
        <Link className="navbar-brand" to="/"><h2>Victor Fung Catering</h2></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/about">About <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Header
