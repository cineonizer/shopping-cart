import React, { useState, useEffect } from 'react';
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
      console.log(data);
      setProduct(data);
    };
    fetchProduct();
  }, []);

  return (
    <div className="product-page">
      <div className="product-container">
        <div className="carousel-container">
          <Carousel
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
      </div>
    </div>
  );
};

export default ProductPage;
