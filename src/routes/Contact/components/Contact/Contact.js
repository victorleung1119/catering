import React, { Component } from 'react'
import './Contact.css'
class Contact extends Component {
  constructor(props) {
    super(props)

    this.state = {
      firstName: ``,
      lastName: ``,
      email: ``,
      phone: '',
      address: ``,
      address2: ``,
      city: ``,
      state: ``,
      zip: ``,
      contactByPhone: ``,
    }
  }
  render() {
    return (
      <form onSubmit={(e) => {
        e.preventDefault()
        console.warn(`form submitted`, this.state)
      }}>
        <div className="form-row firstItem">
        </div>
        <div className="form-group">
          <label htmlFor="inputLastName">First Name</label>
          <input
            type="text"
            className="form-control"
            id="inputName"
            placeholder="First"
            onChange={(e) => {
              this.setState({
                firstName: e.target.value,
              })
            }}></input>
        </div>
        <div className="form-group">
          <label htmlFor="inputLastName">Last Name</label>
          <input
            type="text"
            className="form-control"
            id="inputLastName"
            placeholder="Last"
            onChange={(e) => {
              this.setState({
                lastName: e.target.value,
              })
            }}></input>
        </div>
        <div className="form-group">
          <label htmlFor="inputEmail">Email Address</label>
          <input
            type="text"
            className="form-control"
            id="inputEmail"
            placeholder="Email"
            onChange={(e) => {
              this.setState({
                email: e.target.value,
              })
            }}></input>
        </div>
        <div className="form-group">
          <label htmlFor="inputPhone">Phone Number</label>
          <input
            type="text"
            className="form-control"
            id="inputPhone"
            placeholder="(xxx) xxx xxxx"
            onChange={(e) => {
              this.setState({
                phone: e.target.value,
              })
            }}></input>
        </div>
        <div className="form-group">
          <label htmlFor="inputAddress">Event Location Address</label>
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder="1234 Main St"
            onChange={(e) => {
              this.setState({
                address: e.target.value,
              })
            }}></input>
        </div>
        <div className="form-group">
          <label htmlFor="inputAddress2">Address 2</label>
          <input
            type="text"
            className="form-control"
            id="inputAddress2"
            placeholder="Apartment, studio, or floor"
            onChange={(e) => {
              this.setState({
                address2: e.target.value,
              })
            }}></input>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputCity">City</label>
            <input
              type="text"
              className="form-control"
              id="inputCity"
              onChange={(e) => {
                this.setState({
                  city: e.target.value,
                })
              }}
              ></input>
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="inputState">State</label>
            <select
              id="inputState"
              className="form-control"
              value={this.state.state}
              onChange={e => {
                this.setState({
                  state: e.target.value,
                })
              }}>
              <option value="">State</option>
              <option value="AL">Alabama</option>
              <option value="AK">Alaska</option>
              <option value="AZ">Arizona</option>
              <option value="AR">Arkansas</option>
              <option value="CA">California</option>
              <option value="CO">Colorado</option>
              <option value="CT">Connecticut</option>
              <option value="DE">Delaware</option>
              <option value="DC">District Of Columbia</option>
              <option value="FL">Florida</option>
              <option value="GA">Georgia</option>
              <option value="HI">Hawaii</option>
              <option value="ID">Idaho</option>
              <option value="IL">Illinois</option>
              <option value="IN">Indiana</option>
              <option value="IA">Iowa</option>
              <option value="KS">Kansas</option>
              <option value="KY">Kentucky</option>
              <option value="LA">Louisiana</option>
              <option value="ME">Maine</option>
              <option value="MD">Maryland</option>
              <option value="MA">Massachusetts</option>
              <option value="MI">Michigan</option>
              <option value="MN">Minnesota</option>
              <option value="MS">Mississippi</option>
              <option value="MO">Missouri</option>
              <option value="MT">Montana</option>
              <option value="NE">Nebraska</option>
              <option value="NV">Nevada</option>
              <option value="NH">New Hampshire</option>
              <option value="NJ">New Jersey</option>
              <option value="NM">New Mexico</option>
              <option value="NY">New York</option>
              <option value="NC">North Carolina</option>
              <option value="ND">North Dakota</option>
              <option value="OH">Ohio</option>
              <option value="OK">Oklahoma</option>
              <option value="OR">Oregon</option>
              <option value="PA">Pennsylvania</option>
              <option value="RI">Rhode Island</option>
              <option value="SC">South Carolina</option>
              <option value="SD">South Dakota</option>
              <option value="TN">Tennessee</option>
              <option value="TX">Texas</option>
              <option value="UT">Utah</option>
              <option value="VA">Virginia</option>
              <option value="WA">Washington</option>
              <option value="WV">West Virginia</option>
              <option value="WI">Wisconsin</option>
              <option value="WY">Wyoming</option>
              <option value="PR">Puerto Rico</option>
            </select>
          </div>
          <div className="form-group col-md-2">
            <label htmlFor="inputZip">Zip</label>
            <input
              type="text"
              className="form-control"
              id="inputZip"
              onChange={(e) => {
                this.setState({
                  zip: e.target.value,
                })
              }}
              ></input>
          </div>
        </div>
        <div className="form-group">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="gridCheck"
              onChange={(e) => {
                this.setState({
                  contactByPhone: e.target.checked,
                })
              }}
              ></input>
            <label className="form-check-label" htmlFor="gridCheck">
              Contact me by phone
            </label>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    )
  }
}

export default Contact
