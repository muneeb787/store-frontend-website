import { useEffect, useState } from 'react';
import FilterCategory from './filterCategory';
import FilterProducts from './products';
import useAxios from '../../../../hooks/axios';

// import favt from "../../../assets/images/icons/icon-heart-01.png"



const ProductList = () => {
    const axiosInstance = useAxios()

    const [categories, setCategories] = useState([])
    const [products, setProducts] = useState([])
    const [selectedCategory, setSelectedCategory] = useState(null);


    useEffect(() => {
        fetchProducts()
    }, [selectedCategory])

    const fetchProducts = () => {
        if (selectedCategory) {
            console.log("fetch Product _selected category")
            axiosInstance.get(`/products/${selectedCategory}/1/4`).then((res) => {
                setProducts(res.data.products)
            })
        }
        else {
            console.log("fetch Product _else")
            axiosInstance.get(`/products/1/4`).then((res) => {
                setProducts(res.data.products)
            })
        }
    }

    useEffect(() => {
        axiosInstance.get('/category').then((res) => {
            setCategories(res.data)
        })
    }, [])

    const handleCategoryClick = (category) => {
        // Update the selected category and reset the current page
        setSelectedCategory(category);
        fetchProducts()
    };

    return (
        <div className="container mx-auto py-8 text-center">
            <h1 className="text-6xl text-black pt-24 font-extrabold mb-10">Store Overview</h1>
            <FilterCategory
                categories={categories}
                handleCat = {handleCategoryClick}

            />
            <FilterProducts products={products}/>
        </div>
    );
};

export default ProductList;
