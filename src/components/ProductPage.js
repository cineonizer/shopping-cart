import React, { useState, useEffect } from 'react';

const ProductPage = ({ match }) => {
  const [product, setProduct] = useState({});
  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(
        `http://localhost:3001/products/${match.params.product}`
      );
      const data = await response.json();
      console.log(data)
      setProduct(data);
    };
    fetchProduct();
  }, []);

  return <div>hello product page</div>;
};

export default ProductPage;
