import React, { Fragment } from 'react';
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

function App() {
  return (
    <div>
      <Header/>
        <Router>
          <Fragment>
              <Switch>
                <Route exact path="/" component={Index} />
              </Switch>
          </Fragment>
        </Router>
      <Footer/>
    </div>
    );
}

export default App;
