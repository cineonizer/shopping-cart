import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/nav.scss';

const Nav = () => {
  return (
    <nav className="footer">
      <ul>
        <li>
          <button
            className="tab"
            onClick={() =>
              window.open('mailto:customercare@endless.com', '_blank')
            }
          >
            customercare@endless.com
          </button>
        </li>
        <li>
          <button
            className="tab"
            onClick={() =>
              window.open(
                'https://www.google.com/maps/place/395+Johnson+Ave,+Brooklyn,+NY+11206/@40.7078046,-73.9353283,17z/data=!3m1!4b1!4m5!3m4!1s0x89c25c01d28bb8ad:0x84c38d97b3317d2!8m2!3d40.7078046!4d-73.9331396',
                '_blank'
              )
            }
          >
            395 johnson avenue, brooklyn, ny, 11206
          </button>
        </li>
        <li>
          <button
            className="tab"
            onClick={() => window.open('tel:+15553635377', '_blank')}
          >
            +1 555 363 5377
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
