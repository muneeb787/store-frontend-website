/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react"
import useAxios from "../../hooks/axios"
import FilterProducts from "./components/products"

const ProductStore = () => {

    const axiosInstance = useAxios()

    const [categories, setCategories] = useState([])
    const [products, setProducts] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState(null);

    const fetchProducts = () => {
        if (selectedCategory) {
            console.log("fetch Product _selected category")
            axiosInstance.get(`/products/${selectedCategory}/${currentPage}/12`).then((res) => {
                setProducts(res.data.products)
            })
        }
        else {
            console.log("fetch Product _else")
            axiosInstance.get(`/products/${currentPage}/12`).then((res) => {
                setProducts(res.data.products)
            })
        }
    }

    useEffect(() => {
        fetchProducts()
    }, [selectedCategory])

    useEffect(() => {
        axiosInstance.get('/category').then((res) => {
            setCategories(res.data)
        })
    }, [])

    const loadMoreProducts = () => {
        setCurrentPage(currentPage + 1);
        if (selectedCategory) {
            axiosInstance.get(`/products/${selectedCategory}/${currentPage}/12`).then((res) => {
                setProducts((prevProducts) => [...prevProducts, ...res.data.products]);
            })
        }
        else {
            axiosInstance.get(`/products/${currentPage}/12`).then((res) => {
                setProducts((prevProducts) => [...prevProducts, ...res.data.products]);
            })
        }
    };

    const handleCategoryClick = (category) => {
        // Update the selected category and reset the current page
        setSelectedCategory(category);
        setCurrentPage(1);
        fetchProducts()
    };

    return (
        <div>
            <div className="bg0 m-t-23 p-b-140">
                <div className="container">
                    <div className="flex-w flex-sb-m p-b-52">
                        <div className="flex-w flex-l-m filter-tope-group m-tb-10">
                            <button onClick={() => handleCategoryClick("")} className=" cl6 hov1 bor3 trans-04 m-r-32 m-tb-5" data-filter="*">
                                All
                            </button>
                            {categories.map((category) => {
                                return (
                                    <button onClick={() => handleCategoryClick(category._id)} key={category._id} className=" cl6 hov1 bor3 trans-04 m-r-32 m-tb-5" data-filter="*">
                                        {category.name}
                                    </button>
                                )
                            })}
                        </div>

                        <div className="flex-w flex-c-m m-tb-10">
                            {/* <div className="flex-c-m cl6 size-104 bor4 pointer hov-btn3 trans-04 m-r-8 m-tb-4 js-show-filter">
                                <i className="icon-filter cl2 m-r-6 fs-15 trans-04 zmdi zmdi-filter-list"></i>
                                <i className="icon-close-filter cl2 m-r-6 fs-15 trans-04 zmdi zmdi-close dis-none"></i>
                                Filter
                            </div> */}

                            <div className="flex-c-m cl6 size-105 bor4 pointer hov-btn3 trans-04 m-tb-4 js-show-search">
                                <i className="icon-search cl2 m-r-6 fs-15 trans-04 zmdi zmdi-search"></i>
                                <i className="icon-close-search cl2 m-r-6 fs-15 trans-04 zmdi zmdi-close dis-none"></i>
                                Search
                            </div>
                        </div>

                        {/* <!-- Search product --> */}
                        <div className="dis-none panel-search w-full p-t-10 p-b-15">
                            <div className="bor8 dis-flex p-l-15">
                                <button className="size-113 flex-c-m fs-16 cl2 hov-cl1 trans-04">
                                    <i className="zmdi zmdi-search"></i>
                                </button>

                                <input className="mtext-107 cl2 size-114 plh2 p-r-15" type="text" name="search-product" placeholder="Search" />
                            </div>
                        </div>

                        {/* <!-- Filter --> */}
                        {/* <div className="dis-none panel-filter w-full p-t-10">
                            <div className="wrap-filter flex-w bg6 w-full p-lr-40 p-t-27 p-lr-15-sm">
                                <div className="filter-col1 p-r-15 p-b-27">
                                    <div className="mtext-102 cl2 p-b-15">
                                        Sort By
                                    </div>

                                    <ul>
                                        <li className="p-b-6">
                                            <a href="/" className="filter-link stext-106 trans-04">
                                                Default
                                            </a>
                                        </li>

                                        <li className="p-b-6">
                                            <a href="/" className="filter-link stext-106 trans-04">
                                                Popularity
                                            </a>
                                        </li>

                                        <li className="p-b-6">
                                            <a href="/" className="filter-link stext-106 trans-04">
                                                Average rating
                                            </a>
                                        </li>

                                        <li className="p-b-6">
                                            <a href="/" className="filter-link stext-106 trans-04 filter-link-active">
                                                Newness
                                            </a>
                                        </li>

                                        <li className="p-b-6">
                                            <a href="/" className="filter-link stext-106 trans-04">
                                                Price: Low to High
                                            </a>
                                        </li>

                                        <li className="p-b-6">
                                            <a href="/" className="filter-link stext-106 trans-04">
                                                Price: High to Low
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="filter-col2 p-r-15 p-b-27">
                                    <div className="mtext-102 cl2 p-b-15">
                                        Price
                                    </div>

                                    <ul>
                                        <li className="p-b-6">
                                            <a href="/" className="filter-link stext-106 trans-04 filter-link-active">
                                                All
                                            </a>
                                        </li>

                                        <li className="p-b-6">
                                            <a href="/" className="filter-link stext-106 trans-04">
                                                $0.00 - $50.00
                                            </a>
                                        </li>

                                        <li className="p-b-6">
                                            <a href="/" className="filter-link stext-106 trans-04">
                                                $50.00 - $100.00
                                            </a>
                                        </li>

                                        <li className="p-b-6">
                                            <a href="/" className="filter-link stext-106 trans-04">
                                                $100.00 - $150.00
                                            </a>
                                        </li>

                                        <li className="p-b-6">
                                            <a href="/" className="filter-link stext-106 trans-04">
                                                $150.00 - $200.00
                                            </a>
                                        </li>

                                        <li className="p-b-6">
                                            <a href="/" className="filter-link stext-106 trans-04">
                                                $200.00+
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="filter-col3 p-r-15 p-b-27">
                                    <div className="mtext-102 cl2 p-b-15">
                                        Color
                                    </div>

                                    <ul>
                                        <li className="p-b-6">
                                            <span className="fs-15 lh-12 m-r-6" style={{ color: "#222" }}>
                                                <i className="zmdi zmdi-circle"></i>
                                            </span>

                                            <a href="/" className="filter-link stext-106 trans-04">
                                                Black
                                            </a>
                                        </li>

                                        <li className="p-b-6">
                                            <span className="fs-15 lh-12 m-r-6" style={{ color: "#4272d7" }}>
                                                <i className="zmdi zmdi-circle"></i>
                                            </span>

                                            <a href="/" className="filter-link stext-106 trans-04 filter-link-active">
                                                Blue
                                            </a>
                                        </li>

                                        <li className="p-b-6">
                                            <span className="fs-15 lh-12 m-r-6" style={{ color: "#b3b3b3" }}>
                                                <i className="zmdi zmdi-circle"></i>
                                            </span>

                                            <a href="/" className="filter-link stext-106 trans-04">
                                                Grey
                                            </a>
                                        </li>

                                        <li className="p-b-6">
                                            <span className="fs-15 lh-12 m-r-6" style={{ color: "#00ad5f" }}>
                                                <i className="zmdi zmdi-circle"></i>
                                            </span>

                                            <a href="/" className="filter-link stext-106 trans-04">
                                                Green
                                            </a>
                                        </li>

                                        <li className="p-b-6">
                                            <span className="fs-15 lh-12 m-r-6" style={{ color: "#fa4251" }}>
                                                <i className="zmdi zmdi-circle"></i>
                                            </span>

                                            <a href="/" className="filter-link stext-106 trans-04">
                                                Red
                                            </a>
                                        </li>

                                        <li className="p-b-6">
                                            <span className="fs-15 lh-12 m-r-6" style={{ color: "#aaa" }}>
                                                <i className="zmdi zmdi-circle-o"></i>
                                            </span>

                                            <a href="/" className="filter-link stext-106 trans-04">
                                                White
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="filter-col4 p-b-27">
                                    <div className="mtext-102 cl2 p-b-15">
                                        Tags
                                    </div>

                                    <div className="flex-w p-t-4 m-r--5">
                                        <a href="/" className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5">
                                            Fashion
                                        </a>

                                        <a href="/" className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5">
                                            Lifestyle
                                        </a>

                                        <a href="/" className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5">
                                            Denim
                                        </a>

                                        <a href="/" className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5">
                                            Streetstyle
                                        </a>

                                        <a href="/" className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5">
                                            Crafts
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>

                    <div className="row isotope-grid">
                        <div className="col-sm-6 col-md-4 col-lg-12 p-b-35 isotope-item women">
                            {/* <!-- Block2 --> */}
                            <FilterProducts products={products} />
                        </div>
                    </div>
                    <div className="flex-c-m flex-w w-full p-t-45">
                        <a onClick={loadMoreProducts} className="flex-c-m stext-101 cl5 size-103 bg2 bor1 hov-btn1 p-lr-15 trans-04">
                            Load More
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductStore
