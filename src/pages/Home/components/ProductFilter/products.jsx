import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ProductModel from '../../../../components/model';
import useAxios from '../../../../hooks/axios';
import favt from '../../../../assets/images/icons/icon-heart-01.png';
import favt1 from '../../../../assets/images/icons/icon-heart-02.png';
import image from '../../../../assets/images/product-01.jpg';

const FilterProducts = ({ products }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [product, setProduct] = useState({});
    const axiosInstanse = useAxios();
    const [wishList, setWishList] = useState([]);
    const [isProductInWishList, setIsProductInWishList] = useState({});

    // Function to open the modal
    const openModal = (id) => {
        axiosInstanse.get(`/product/${id}`).then((res) => {
            console.log(res.data);
            setProduct(res.data);
        });
        setIsModalOpen(true);
    };

    // Function to close the modal
    const closeModal = () => {
        setIsModalOpen(false);
    };

    // Function to add/remove a product to/from the wishlist
    const toggleWishList = (id) => {
        const updatedWishList = [...wishList];

        if (isProductInWishList[id]) {
            // Remove the product from the wishlist
            const index = updatedWishList.findIndex((item) => item._id === id);
            if (index !== -1) {
                updatedWishList.splice(index, 1);
                setIsProductInWishList({ ...isProductInWishList, [id]: false });
            }
        } else {
            // Add the product to the wishlist
            const selectedProduct = products.find((product) => product._id === id);
            if (selectedProduct) {
                updatedWishList.push(selectedProduct);
                setIsProductInWishList({ ...isProductInWishList, [id]: true });
            }
        }

        // Store the updated wishlist in local storage
        localStorage.setItem('WishList', JSON.stringify(updatedWishList));

        setWishList(updatedWishList);
    };

    useEffect(() => {
        // Load the wishlist from local storage on component mount
        const existingWishList = JSON.parse(localStorage.getItem('WishList')) || [];
        const productIdsInWishList = existingWishList.reduce((obj, product) => {
            obj[product._id] = true;
            return obj;
        }, {});

        setWishList(existingWishList);
        setIsProductInWishList(productIdsInWishList);
    }, []);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-center">
            {products.map((product) => {
                const isProductInList = isProductInWishList[product._id] || false;
                return (
                    <div key={product._id} className="item-slick2 p-l-15 p-r-15 p-t-15 p-b-15">
                        {/* Block2 */}
                        <div className="block2">
                            <div className="block2-pic hov-img0">
                                <img src={image} alt="IMG-PRODUCT" />
                                <a
                                    onClick={() => {
                                        openModal(product._id);
                                    }}
                                    className="cursor-pointer block2-btn flex-c-m cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1 hover:text-white"
                                >
                                    Quick View
                                </a>
                            </div>
                            <div className="block2-txt flex-w flex-t p-t-14">
                                <div className="block2-txt-child1 flex-col-l">
                                    <a
                                        href="product-detail.html"
                                        className="font-bold cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                                    >
                                        {product.name}
                                    </a>
                                    <span className="cl3">${product.price}</span>
                                </div>
                                <div className="block2-txt-child2 flex-r p-t-3">
                                    <button
                                        onClick={() => {
                                            toggleWishList(product._id);
                                        }}
                                        className="dis-block pos-relative"
                                    >
                                        <img
                                            className="icon-heart1"
                                            src={isProductInList ? favt1 : favt}
                                            alt="ICON"
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
            <ProductModel key={product.name} product={product} isOpen={isModalOpen} closeModal={closeModal} />
        </div>
    );
};

FilterProducts.propTypes = {
    products: PropTypes.array.isRequired,
};

export default FilterProducts;
