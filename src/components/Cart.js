import '../styles/cart.scss';

const Cart = ({ cart }) => {
  return (
    <div className="cart">
      <div className="cart-container">
        <div className="items">
          <hr />
          <div className="header">
            <div className="title">cart</div>
            <div className="quantity">{cart.length} {(cart.length !== 1) ? 'items' : 'item'}</div>
          </div>
          <hr />
          <div className="item">item #1</div>
          <div className="item">item #1</div>
          <div className="item">item #1</div>
          <div className="item">item #1</div>
          <div className="item">item #1</div>
        </div>
        <div className="summary">summary</div>
      </div>
    </div>
  )

};

export default Cart;
