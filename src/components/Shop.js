import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import { getProductImage } from './Helper';
import '../styles/shop.scss';

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://my-json-server.typicode.com/cineonizer/shopping-cart-data/products');
      const data = await response.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <div className="shop">
      {products.map((product) => {
        const cardData = {
          image1: getProductImage(product.designer.toLowerCase(), 'image1'),
          image4: getProductImage(product.designer.toLowerCase(), 'image4'),
          designer: product.designer.toLowerCase(),
          title: product.title.toLowerCase(),
          price: product.price.toLocaleString(),
        };
        return (
          <Link to={`/shop/${product.id}`} key={product.id}>
            <ProductCard data={cardData} />
          </Link>
        );
      })}
    </div>
  );
};

export default Shop;
