import PropTypes from 'prop-types';
import close from "../assets/images/icons/icon-close.png"
import image1 from "../assets/images/product-11.jpg"
import { useState } from 'react';
import { toast } from 'react-toastify';

const ProductModel = ({ isOpen, closeModal, product }) => {
    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (increment) => {
        if (increment) {
            setQuantity(quantity + 1);
        } else if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const addToCart = (product) => {
        // Retrieve the current cart items from localStorage or initialize an empty array
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        
        // Create a new item object for the product
        const newItem = {
            id: product._id, // You may need to add a unique identifier to each product
            name: product.name,
            price: product.price,
            quantity: quantity,
        };

        // Add the new item to the cart
        cartItems.push(newItem);

        // Store the updated cart items in localStorage
        localStorage.setItem('cartItems', JSON.stringify(cartItems));

        // Optionally, you can display a confirmation message to the user
        toast.success(`${quantity} ${product.name}(s) added to cart!`)
        closeModal()
    };

    return (
        <div>
            <div className={`wrap-modal1 js-modal1 p-t-60 p-b-20 ${isOpen ? 'show-modal1' : ''}`} style={{ fontFamily: "Poppins" , height: "90vh" , overflow: 'hidden' }}>
                <div className="overlay-modal1 js-hide-modal1"></div>

                <div className="container">
                    <div className="bg0 p-t-60 p-b-30 p-lr-15-lg how-pos3-parent">
                        <button onClick={closeModal} className="how-pos3 hov3 trans-04 js-hide-modal1">
                            <img src={close} alt="CLOSE" />
                        </button>

                        <div className="row">
                            <div className="col-md-6 col-lg-7 p-b-30">
                                <div className="p-l-25 p-r-30 p-lr-0-lg">
                                    <div className="wrap-slick3 flex-sb flex-w">
                                        <div className="wrap-slick3-dots"></div>
                                        <div className="wrap-slick3-arrows flex-sb-m flex-w"></div>

                                        <div className="slick3 gallery-lb">
                                            <div className="item-slick3" data-thumb={image1}>
                                                <div className="wrap-pic-w pos-relative">
                                                    <img
                                                        src={product.image ? `http://localhost:3303/images/${product.image}` : image1}
                                                        alt="IMG-PRODUCT"
                                                        style={{ maxWidth: "100%" }} // Set a maximum width for the image
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-5 p-b-30">
                                <div className="p-r-50 p-t-5 p-lr-0-lg">
                                    <h4 className="text-3xl cl2 js-name-detail p-b-14">
                                        {product.name}
                                    </h4>

                                    <span className="text-lg cl2">
                                        ${product.price}
                                    </span>

                                    <p className="cl3 p-t-23">
                                        {product.description}
                                    </p>

                                    <div className="p-t-33">
                                        <div className="flex-w flex-m p-b-10">
                                            <div className="size-203 flex-c-m respon6">
                                                Quantity
                                            </div>

                                            <div className="size-204 respon6-next">
                                                <div className="wrap-num-product flex-w m-r-20 m-tb-10">
                                                    <div
                                                        onClick={() => handleQuantityChange(false)}
                                                        className="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m"
                                                    >
                                                        <i className="fs-16 zmdi zmdi-minus"></i>
                                                    </div>

                                                    <input
                                                        className="cl3 txt-center num-product"
                                                        type="number"
                                                        name="num-product"
                                                        value={quantity}
                                                        readOnly
                                                    />

                                                    <div
                                                        onClick={() => handleQuantityChange(true)}
                                                        className="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m"
                                                    >
                                                        <i className="fs-16 zmdi zmdi-plus"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <button  onClick={()=>{addToCart(product)}} className="flex-c-m cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04 js-addcart-detail">
                                            Add to cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

ProductModel.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired,
    product: PropTypes.object.isRequired,
};

export default ProductModel;
