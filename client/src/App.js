import React, { Fragment } from 'react';
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './styles/App.css';
import './styles/bootstrap.min.css';
import './styles/magnific-popup.css';
import './styles/font-awesome.min.css';
import './styles/themify-icons.css';
import './styles/nice-select.css';
import './styles/flaticon.css';
import './styles/gijgo.css';
import './styles/animate.css';
import './styles/slick.css';
import './styles/slicknav.css';

import Header from './components/layout/header';
import Footer from './components/layout/footer';

import Index  from './pages/index';
import Contact  from './pages/contact';
import About  from './pages/about';
import FourZeroFour  from './pages/404';
import SingleDestination from './pages/SingleDestination';
import AllDestinations  from './pages/AllDestinations';

function App() {
  return (
    <div>
            <Helmet defer={false}>
              <title>Kaim Trip</title>
              <meta name="description" content="KaimTrip offers you a very useful platform to plan your most memorable customized trips to feel the nature at its best and to spend your precious time with your loved ones!!!" />
            </Helmet>
      <Header/>
        <Router>
          <Fragment>
              <Switch>
                <Route exact path="/" component={Index} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/about" component={About} />
                <Route exact path="/destination/:destination" component={SingleDestination} />
                <Route exact path="/destinations" component={AllDestinations} />
                <Route component={FourZeroFour} />
              </Switch>
          </Fragment>
        </Router>
      <Footer/>
    </div>
    );
}

export default App;
