import React, { Component } from 'react'
import './Home.css'

class Home extends Component {
  render() {
    return (
      <div className="Home">
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
        <div className="container-fluid rowlilbox">
          <div className="row" >
            <div className="col-12 col-sm-4 p-1 d-flex align-items-center justify-content-center lilbox img-fluid img-thumbnail ourFood text-light" style={{
              height: `300px`,
            }}>
              <h3>OUR FOOD</h3>
            </div>
            <div className="col-12 col-sm-4 p-1 d-flex align-items-center justify-content-center lilbox img-fluid img-thumbnail ourStory text-light" style={{
              height: `300px`,
            }}>
              <h3>OUR STORY</h3>
            </div>
            <div className="col-12 col-sm-4 p-1 d-flex align-items-center justify-content-center lilbox img-fluid img-thumbnail contactUs" style={{
              height: `300px`,
            }}>
              <h3>CONTACT US</h3>
            </div>
         </div>
        </div>
      </div>
    )
  }
}

export default Home
