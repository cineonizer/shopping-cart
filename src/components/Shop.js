import React, { useState, useEffect } from 'react';
import '../styles/shop.scss';

const ProductCard = ({ data }) => {
  return (
    <div className="card">
      <img src={data.mainImage} alt="" />
      <div className="card-designer">{data.designer}</div>
      <div className="card-title">{data.title}</div>
      <div className="card-price">{`$${data.price}`}</div>
    </div>
  );
};

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
          designer: product.designer,
          title: product.title,
          price: product.price,
        };
        return <ProductCard data={cardData} key={product.id} />;
      })}
    </div>
  );
};

export default Shop;
