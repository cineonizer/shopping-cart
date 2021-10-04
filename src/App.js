import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './styles/App.scss';
import Nav from './components/Nav';
import Home from './components/Home';
import Shop from './components/Shop';
import About from './components/About';

const App = () => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/shop" exact component={Shop} />
        <Route path="/about" exact component={About} />
      </Switch>
    </Router>
  );
};

export default App;
