import React, { Component } from 'react';
import './App.css';

class App extends Component {
  renderHeader() {
    return (
      <nav
        class="navbar fixed-top navbar-expand-lg navbar-dark navcustom m-1">
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

  renderMain() {
    return (
      <div className="background">
        <div className="bgwidget">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 col-sm-6 d-flex align-items-center justify-content-center" style={{
                height: `500px`,
              }}>
                <div className="d-flex flex-column align-items-center justify-content-center">
                  <h3 className="align-items-center text-center text-white">荔蓉香酥帶子</h3>
                  <button type="button" className="btn btn-danger mt-3">CATER NOW</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid py-1">
          <div className="row" style={{
            height: `300px`,
          }}>
            <div className="col-12 col-sm-4 p-1 d-flex align-items-center justify-content-center lilbox img-fluid ourFood text-light">
              <h3>OUR FOOD</h3>
            </div>
            <div className="col-12 col-sm-4 p-1 d-flex align-items-center justify-content-center lilbox img-fluid ourStory text-light">
              <h3>OUR STORY</h3>
            </div>
            <div className="col-12 col-sm-4 p-1 d-flex align-items-center justify-content-center lilbox img-fluid contactUs">
              <h3>CONTACT US</h3>
            </div>
         </div>
        </div>
      </div>
    )
  }

  render() {
    // Return JSX code.
    return (
      <div className="App p-1">
        {this.renderHeader()}
        {this.renderMain()}
      </div>
    );
  }
}

export default App;
