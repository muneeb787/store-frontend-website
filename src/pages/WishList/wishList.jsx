import { useState, useEffect } from 'react';

const WishList = () => {
    const [wishListItems, setWishListItems] = useState([]);

    useEffect(() => {
        // Load the wishlist from local storage on component mount
        const existingWishList = JSON.parse(localStorage.getItem('WishList')) || [];
        setWishListItems(existingWishList);
    }, []);

    const removeFromWishList = (index) => {
        const updatedWishList = [...wishListItems];
        updatedWishList.splice(index, 1);
        setWishListItems(updatedWishList);
        localStorage.setItem('WishList', JSON.stringify(updatedWishList));
    };

    const clearWishList = () => {
        setWishListItems([]);
        localStorage.removeItem('WishList');
    };

    return (
        <div>
            <form className="bg0 p-t-75 p-b-85 poppins">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 col-xl-10 m-lr-auto m-b-50">
                            <div className="m-l-25 m-r--38 m-lr-0-xl">
                                <h1 className="text-center text-6xl font-extrabold mb-10">WishList</h1>
                                <div className="wrap-table-shopping-cart">
                                    <table className="table-shopping-cart">
                                        <thead>
                                            <tr className="table_head">
                                                <th className="column-1">Product</th>
                                                <th className="column-2">Name</th>
                                                <th className="column-3"></th>
                                                <th className="column-4">Price</th>
                                                <th className="column-5">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {wishListItems.map((item, index) => (
                                                <tr key={index} className="table_row poppins">
                                                    <td className="column-1">
                                                        <div className="how-itemcart1">
                                                            <img src={item.image} alt={item.name} />
                                                        </div>
                                                    </td>
                                                    <td className="column-2 poppins">{item.name}</td>
                                                    <td className="column-3 poppins"></td>
                                                    <td className="column-4 poppins">$ {item.price.toFixed(2)}</td>
                                                    <td className="column-5 poppins">
                                                        <div className="w-32 ml-auto">
                                                            <div
                                                                className="flex-c-m cl2 size-119 bg8 bor13 hov-btn3 p-lr-15 trans-04 pointer m-tb-10"
                                                                onClick={() => removeFromWishList(index)}
                                                            >
                                                                Remove
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>

                                <div className="flex-w flex-sb-m bor15 p-t-18 p-b-15 p-lr-40 p-lr-15-sm">
                                    <div
                                        className="flex-c-m cl2 size-119 bg8 bor13 hov-btn3 p-lr-15 trans-04 pointer m-tb-10"
                                        onClick={clearWishList}
                                    >
                                        Clear WishList
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default WishList;
