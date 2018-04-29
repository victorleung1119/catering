import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <nav
        className="Header navbar fixed-top navbar-expand-lg navbar-dark navcustom m-1" style={{
          backgroundColor: `#DD401E`,
        }}>
        <a className="navbar-brand" href="index.html"><h2>Victor Fung Catering</h2></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="About.html">About <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="Contact.html">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Header
