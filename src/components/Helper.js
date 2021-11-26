import productImages from './ProductImages';

const getProductImage = (designer, image) => {
  const obj = productImages.find((obj) => obj.designer === designer);
  if (obj) return obj[image];
};

export { getProductImage };
