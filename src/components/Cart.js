import React, { useState, useEffect } from 'react';
import '../styles/cart.scss';

const Cart = ({ cart, setCart }) => {
  const [subtotal, setSubtotal] = useState(0)
  const [shippingCost, setShippingCost] = useState(0)
  const [total, setTotal] = useState(0)

  const handleRemoveBtnClick = (removedProduct) => {
    const updatedCart = cart.filter((product) => product.id !== removedProduct.id);
    setCart(updatedCart);
  }

  const handleCheckoutBtnClick = () => {
    alert('This is the end of my shopping cart project. Thanks for checking it out!')
  }

  useEffect(() => {
    // reduce the objects (price times quantity) in the array to an int
    const sumOfPrices = cart.reduce((accumulator, objCart) => {
      return accumulator + parseInt(objCart.price.replace(/,/g, '')) * parseInt(objCart.quantity)
    }, 0)
    // convert int to string specifically a localestring for the comma
    setSubtotal(sumOfPrices)
    setTotal(sumOfPrices + shippingCost)
  }, [cart])


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
                  <div className="cart-info">
                    <div className="designer">{product.designer}</div>
                    <div className="title">{product.title}</div>
                    <div className="colour">{`colour: ${product.colour}`}</div>
                    <div className="qty">{` qty: ${product.quantity}`}</div>
                    <div className="price">{`$${product.price}`}</div>
                    <button onClick={() => { handleRemoveBtnClick(product) }}>remove</button>
                  </div>
                </div>
                <hr />
              </div>
            )
          })}
        </div>
        <div className="review">
          <div className="summary">order summary</div>
          <div className="subtotal">item sub-total
            <span>{`$${subtotal.toLocaleString()}`}</span>
          </div>
          <div className="shipping">shipping
            <span>free</span>
          </div>
          <div className="total">total (usd)
            <span>{`$${total.toLocaleString()}`}</span>
          </div>
          <button onClick={handleCheckoutBtnClick}>proceed to checkout</button>
        </div>
      </div>
    </div>
  )
};

export default Cart;
