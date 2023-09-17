import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';

const CartMenu = ({ isOpen, closeCart }) => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        // Retrieve cart items from localStorage
        const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        setCartItems(storedCartItems);
    }, []);

    return (
        <div>
            <div className={`wrap-header-cart js-panel-cart ${isOpen ? 'show-header-cart' : ''}`}>
                <div className="s-full js-hide-cart"></div>

                <div className="header-cart flex-col-l p-l-65 p-r-25">
                    <div className="header-cart-title flex-w flex-sb-m p-b-8">
                        <span className="mtext-103 cl2">
                            Your Cart
                        </span>

                        <div onClick={closeCart} className="fs-35 lh-10 cl2 p-lr-5 pointer hov-cl1 trans-04 js-hide-cart">
                            <i className="zmdi zmdi-close"></i>
                        </div>
                    </div>

                    <div className="header-cart-content flex-w js-pscroll">
                        <ul className="header-cart-wrapitem w-full ">
                            {cartItems.map((item, index) => (
                                <li key={index} className="header-cart-item flex-w flex-t m-b-12">
                                    <div className="header-cart-item-img">
                                        <img src={item.image} alt="IMG" />
                                    </div>

                                    <div className="header-cart-item-txt p-t-8 poppins">
                                        <a href="#" className="header-cart-item-name m-b-18 hov-cl1 trans-04 poppins">
                                            {item.name}
                                        </a>

                                        <span className="header-cart-item-info poppins">
                                            {item.quantity} x ${item.price.toFixed(2)}
                                        </span>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        <div className="w-full">
                            <div className="header-cart-total w-full p-tb-40 poppins">
                                Total: ${cartItems.reduce((total, item) => total + item.quantity * item.price, 0).toFixed(2)}
                            </div>

                            <div className="header-cart-buttons flex-w w-full">
                                <a href="shoping-cart.html" className="flex-c-m stext-101 cl0 size-107 bg3 bor2 hov-btn3 p-lr-15 trans-04 m-r-8 m-b-10">
                                    View Cart
                                </a>

                                <a href="shoping-cart.html" className="flex-c-m stext-101 cl0 size-107 bg3 bor2 hov-btn3 p-lr-15 trans-04 m-b-10">
                                    Check Out
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

CartMenu.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    closeCart: PropTypes.func.isRequired,
};

export default CartMenu;
