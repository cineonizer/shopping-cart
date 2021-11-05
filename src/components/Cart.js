import '../styles/cart.scss';

const Cart = ({ cart }) => {
  return (
    <div className="cart">
      <div className="cart-container">
        <div className="col">
          <div className="header-title">cart</div>
          <div className="header-qty">{cart.length} {(cart.length !== 1) ? 'items' : 'item'}</div>
          <hr />
          {cart.map((product) => {
            return (
              <div>
                <div className="item">
                  <img src={product.image1} alt="" />
                  <div className="product">
                    <div className="designer">{product.designer}</div>
                    <div className="title">{product.title}</div>
                    <div className="colour">{`colour: ${product.colour}`}</div>
                    <div className="qty">{` qty: ${product.quantity}`}</div>
                    <div className="price">{`$${product.price}`}</div>
                  </div>
                </div>
                <hr />
              </div>
            )
          })}
        </div>
        <div className="summary">order summary</div>
      </div>
    </div>
  )
};

export default Cart;
