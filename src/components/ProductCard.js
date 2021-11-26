const ProductCard = ({ data }) => {
  return (
    <div className="card">
      <img
        src={data.image1}
        alt={data.title}
        onMouseEnter={(e) => (e.currentTarget.src = data.image4)}
        onMouseLeave={(e) => (e.currentTarget.src = data.image1)}
      />
      <div className="info">
        <div className="designer">{data.designer}</div>
        <div className="title">{data.title}</div>
        <div className="price">{`$${data.price}`}</div>
      </div>
    </div>
  );
};

export default ProductCard;