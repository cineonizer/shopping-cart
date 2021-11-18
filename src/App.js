import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HeaderNav from './components/HeaderNav';
import FooterNav from './components/FooterNav';
import Home from './components/Home';
import Shop from './components/Shop';
import About from './components/About';
import ProductPage from './components/ProductPage';
import Cart from './components/Cart';
import backgroundVideo from './assets/videos/film-burns.mp4';
import './styles/App.scss';

const App = () => {
  const [cart, setCart] = useState([]);

  return (
    <Router>
      <HeaderNav cartQty={cart.length} />
      <Switch>
        <Route path="/shopping-cart" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/shop" exact component={Shop} />
        <Route
          path="/shop/:product"
          render={(props) => (
            <ProductPage {...props} cart={cart} setCart={setCart} />
          )}
        />
        <Route
          path="/cart"
          render={(props) => <Cart {...props} cart={cart} setCart={setCart} />}
        />
      </Switch>
      <FooterNav />
      <video className="videoTag" autoPlay loop muted>
        <source src={backgroundVideo} type="video/mp4" />
      </video>
    </Router>
  );
};

export default App;
