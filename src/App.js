import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

//components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Landing from './components/Pages/Landing';
import Contact from './components/Pages/Contact';
import Play from './components/Pages/Play';
import Work from './components/Pages/Work';

//styles
import "./assets/css/styles.css";
import "./assets/css/carousel.css";

class App extends Component {
  render() {
    return (
      <Router>

        <div className="App">

          <Header />

          <Route exact path={process.env.PUBLIC_URL + '/'} component={Landing} />
          <Route exact path={process.env.PUBLIC_URL + '/Work'} component={Work} />
          <Route exact path={process.env.PUBLIC_URL + '/Play'} component={Play} />
          <Route exact path={process.env.PUBLIC_URL + '/Contact'} component={Contact} />

          <Footer />

        </div>

      </Router>
    );
  }
}

export default App;
