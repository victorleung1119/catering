import React, { Component } from 'react';
import Home from './routes/Home/components/Home/Home'
import About from './routes/About/components/About/About'
import Contact from './routes/Contact/components/Contact/Contact'
import Header from './components/Header/Header'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

class App extends Component {
  render() {
    // Return JSX code.
    return (
      <div className="App p-1">
        <Router>
          <div>
            <Header />
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
          </div>
        </Router>
      </div>
    )
  }
}

/* Another way to write ^^ */
// const App = () => {
//   (
//     <div className="App p-1">
//       <Home />
//     </div>
//   )
// }

export default App;
