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

export default ProductCard;