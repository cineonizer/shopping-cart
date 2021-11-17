import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import '../styles/product.scss';

const ProductPage = ({ match, cart, setCart }) => {
  const [product, setProduct] = useState({});

  const incrementProductQty = () => {
    const newQty = parseInt(document.querySelector('input').value) + 1;
    document.querySelector('input').value = newQty.toString();
  };

  const decrementProductQty = () => {
    if (
      document.querySelector('input').value ===
      document.querySelector('input').min
    )
      return;
    const newQty = parseInt(document.querySelector('input').value) - 1;
    document.querySelector('input').value = newQty.toString();
  };

  const displayText = (text) => {
    const addToBagBtn = document.querySelector('.add-to-bag-btn');
    const defaultText = addToBagBtn.textContent;
    addToBagBtn.textContent = text;
    setTimeout(() => (addToBagBtn.textContent = defaultText), 1000);
  };

  const handleAddToBagBtnClick = () => {
    // checks to see if the product id is already in cart
    if (cart.some((element) => element.id === product.id)) {
      displayText('already in cart');
      return;
    }
    const cartObj = {
      ...product,
      quantity: document.querySelector('input').value,
    };
    // update the cart state
    setCart((prevCart) => [...prevCart, cartObj]);
    // change the text when add to bag button is clicked
    displayText('added to cart');
  };

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(
        `http://localhost:3001/products/${match.params.product}`
      );
      const data = await response.json();
      // convert all the json values to be lowercase to fit the aesthetic
      Object.entries(data).forEach((entry) => {
        // however don't lowercase the urls because links are case sensitive
        if (!entry[0].includes('image') && typeof entry[1] === 'string') {
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
              <button onClick={decrementProductQty}>-</button>
              <input type="number" min="1" max="100" defaultValue="1"></input>
              <button onClick={incrementProductQty}>+</button>
            </div>
          </div>
          <div className="button-container">
            <button className="add-to-bag-btn" onClick={handleAddToBagBtnClick}>
              add to cart
            </button>
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
