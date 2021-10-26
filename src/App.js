import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HeaderNav from './components/HeaderNav';
import FooterNav from './components/FooterNav';
import Home from './components/Home';
import Shop from './components/Shop';
import About from './components/About';
import ProductPage from './components/ProductPage';
import backgroundVideo from './assets/videos/film-burns.mp4';
import './styles/App.scss';

const App = () => {
  return (
    <Router>
      <HeaderNav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/shop" exact component={Shop} />
        <Route path="/shop/:product" component={ProductPage}/>
      </Switch>
      <FooterNav />
      <video className="videoTag" autoPlay loop muted>
        <source src={backgroundVideo} type="video/mp4" />
      </video>
    </Router>
  );
};

export default App;
