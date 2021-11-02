import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import '../styles/product.scss';

const ProductPage = ({ match }) => {
  const [product, setProduct] = useState({});
  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(
        `http://localhost:3001/products/${match.params.product}`
      );
      const data = await response.json();
      // convert all the json values to be lowercase to fit the aesthetic
      Object.entries(data).forEach((entry) => {
        if (typeof entry[1] === 'string') {
          data[entry[0]] = entry[1].toLowerCase();
        }
      });
      setProduct(data);
    };
    fetchProduct();
  }, []);

  return (
    <div className="product-page">
      <div className="product-container">
        <div className="carousel-container">
          <Carousel
            infiniteLoop
            showArrows={true}
            showThumbs={true}
            showIndicators={false}
            showStatus={false}
          >
            <div className="image">
              <img src={product.image1} alt="Slide" />
            </div>
            <div className="image">
              <img src={product.image2} alt="Slide" />
            </div>
            <div className="image">
              <img src={product.image3} alt="Slide" />
            </div>
            <div className="image">
              <img src={product.image4} alt="Slide" />
            </div>
          </Carousel>
        </div>
        <div className="product-info">
          <div className="product-designer">{product.designer}</div>
          <div className="product-title">{product.title}</div>
          <div className="product-price">{`$${product.price}`}</div>
          <div className="product-colour">
            <div className="product-colour-text">
              <span className="key">colour: </span>
              <span className="value">{product.colour}</span>
            </div>
            <div className="qty">
              <button>-</button>
              <input type="number" min="0" max="100" value="1"></input>
              <button>+</button>
            </div>
          </div>
          <div className="button-container">
            <button>add to cart</button>
            <Link to="/shop">
              <button>keep shopping</button>
            </Link>
          </div>
          <div className="product-description">
            <span className="key">notes: </span>
            <span className="value">{product.description}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
