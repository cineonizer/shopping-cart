import { Link } from 'react-router-dom';
import '../styles/nav.scss';

const Nav = () => {
  return (
    <nav className="header">
      <ul>
        <Link to="/about" className="tab">
          <li>about</li>
        </Link>
        <Link to="/shop" className="tab">
          <li>shop</li>
        </Link>
        <Link to="/cart" className="tab">
          <li>
            cart <sup>{0}</sup>
          </li>
        </Link>
      </ul>
      <Link to="/" className="brand-name">
        endless
      </Link>
    </nav>
  );
};

export default Nav;
