import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import image from "../../assets/images/product-04.jpg"
import { toast } from 'react-toastify';

const WishListMenu = ({ isOpen, closeCart }) => {
    const [wishListItems, setWishListItems] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
        const existingWishList = JSON.parse(localStorage.getItem('WishList')) || [];
        setWishListItems(existingWishList);
    }, []);

    const handleDeleteItem = (index) => {
        const updatedCartItems = [...wishListItems];
        updatedCartItems.splice(index, 1); // Remove the item at the specified index
        setWishListItems(updatedCartItems);
        localStorage.setItem("WishList", JSON.stringify(updatedCartItems));
        toast.success("Item removed from WishList");
    };

    return (
        <div>
            <div className={`wrap-header-cart js-panel-cart ${isOpen ? 'show-header-cart' : ''}`}>
                <div className="s-full js-hide-cart"></div>

                <div className="header-cart flex-col-l p-l-65 p-r-25">
                    <div className="header-cart-title flex-w flex-sb-m p-b-8">
                        <span className="mtext-103 cl2">Your WishList</span>

                        <div onClick={closeCart} className="fs-35 lh-10 cl2 p-lr-5 pointer hov-cl1 trans-04 js-hide-cart">
                            <i className="zmdi zmdi-close"></i>
                        </div>
                    </div>

                    <div className="header-cart-content flex-w js-pscroll">
                        <ul className="header-cart-wrapitem w-full">
                            {wishListItems.map((item, index) => (
                                <li key={index} className="header-cart-item flex-w flex-t m-b-12">
                                    <div onClick={() => handleDeleteItem(index)} className="header-cart-item-img">
                                        <img src={item.image ? `http://localhost:3303/images/${item.image}` : image} alt={item.name} />
                                    </div>

                                    <div className="header-cart-item-txt p-t-8">
                                        <a href="#" className="poppins header-cart-item-name m-b-18 hov-cl1 trans-04">
                                            {item.name}
                                        </a>

                                        <span className="poppins header-cart-item-info">
                                            ${item.price.toFixed(2)}
                                        </span>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        <div className="w-full">
                            <div className="header-cart-buttons flex-w w-full">
                                <a onClick={()=>{
                                    closeCart()
                                    navigate("/wishlist")}} className="text-white poppins flex-c-m cl0 size-107 bg3 bor2 hov-btn3 p-lr-15 trans-04 m-r-8 m-b-10">
                                    View WishList
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

WishListMenu.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    closeCart: PropTypes.func.isRequired,
};

export default WishListMenu;
