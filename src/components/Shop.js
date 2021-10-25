import React, { useState, useEffect } from 'react';
import '../styles/shop.scss';

const ProductCard = ({ data }) => {
  return (
    <div className="card">
      <img
        src={data.mainImage}
        alt={data.title}
        onMouseEnter={(e) => (e.currentTarget.src = data.hoverImage)}
        onMouseLeave={(e) => (e.currentTarget.src = data.mainImage)}
      />
      <div className="info">
        <div className="designer">{data.designer}</div>
        <div className="title">{data.title}</div>
        <div className="price">{`$${data.price}`}</div>
      </div>
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
          designer: product.designer.toLowerCase(),
          title: product.title.toLowerCase(),
          price: product.price,
        };
        return <ProductCard data={cardData} key={product.id} />;
      })}
    </div>
  );
};

export default Shop;
