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
  const [cart, setCart] = useState([{
    "id": 22250442025773900,
    "designer": "seb brown",
    "title": "neapolitan silver, sapphire, tourmaline and emerald ring",
    "price": "515",
    "colour": "silver",
    "description": "seb brown's 'neapolitan' ring is cast from recycled silver polished to a high shine but left with a characterfully brushed quality. sapphire, tourmaline and emerald stones bring a vibrant finish to its crown.",
    "category": "fine jewelry",
    "image1": "http://localhost:3001/assets/images/seb-brown/neopolitan-1.png",
    "image2": "http://localhost:3001/assets/images/seb-brown/neopolitan-2.png",
    "image3": "http://localhost:3001/assets/images/seb-brown/neopolitan-3.png",
    "image4": "http://localhost:3001/assets/images/seb-brown/neopolitan-4.png",
    "quantity": "1"
}]);

  return (
    <Router>
      <HeaderNav cartQty={cart.length} />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/shop" exact component={Shop} />
        <Route
          path="/shop/:product"
          render={(props) => <ProductPage {...props} cart={cart} setCart={setCart} />}
        />
        <Route path="/cart" render={(props) => <Cart {...props} cart={cart} />} />
      </Switch>
      <FooterNav />
      <video className="videoTag" autoPlay loop muted>
        <source src={backgroundVideo} type="video/mp4" />
      </video>
    </Router>
  );
};

export default App;
