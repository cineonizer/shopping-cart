import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './styles/App.scss';
import HeaderNav from './components/HeaderNav';
import FooterNav from './components/FooterNav';
import Home from './components/Home';
import Shop from './components/Shop';
import About from './components/About';

const App = () => {
  return (
    <Router>
      <HeaderNav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/shop" component={Shop} />
        <Route path="/about" component={About} />
      </Switch>
      <FooterNav />
    </Router>
  );
};

export default App;
