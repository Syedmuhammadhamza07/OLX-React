import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../Store/CartSlice";

import "./index.css";
import Header from "../../Components/Header";
import Footer from "../../Components/footer";
import removeCart from "../../Images/remove-cart.png";

function Cart() {
  // const dispatch = useDispatch();
  // const cart = useSelector((state) => state.cartReducer.cart);
  // console.log("Cart=>", cart[0]);
  // const [cartItem, setCartItem] = useState([]);

  // setCartItem(cart);

  // const removeItemFromCart = () => {
  //   const cartCard = document.getElementById("cart-card");
  //   cartCard.className = "cart-card hide";
  //   dispatch(removeFromCart([]));
  // };

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartReducer.cart);
  const [cartItem, setCartItem] = useState([]);

  useEffect(() => {
    setCartItem(cart);
  }, [cart]);

  const removeItemFromCart = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  return (
    <div>
      <Header />
      <div className="cart-card" id="cart-card">
      {cartItem?.map((post) => (
        <div key={post.id} className="main-cart-Card-div">
          <img src={post.image3} alt="" className="cart-img" />
          <div className="cart-card-info">
            <h3>Rs.{post.amount}</h3>
            <h3 className="cart-cart-title">{post.title}</h3>
          </div>
          <div className="cart-btn-section">
            <button
              onClick={() => removeItemFromCart(post.id)}
              className="cart-btn"
            >
              <img src={removeCart} sizes={30} alt="remove" />
              Remove Item
            </button>
          </div>
        </div>
      ))}

      </div>
      <Footer />
    </div>
  );
}

export default Cart;
