import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import '../styles/shop.scss';

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('http://localhost:3001/products');
      const data = await response.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <div className="shop">
      {products.map((product) => {
        const cardData = {
          mainImage: product.image1,
          hoverImage: product.image4,
          designer: product.designer.toLowerCase(),
          title: product.title.toLowerCase(),
          price: product.price,
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
