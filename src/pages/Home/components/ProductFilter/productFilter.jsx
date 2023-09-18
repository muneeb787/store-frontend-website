import { useEffect, useState } from 'react';
import FilterCategory from './filterCategory';
import FilterProducts from './products';
import useAxios from '../../../../hooks/axios';

// import favt from "../../../assets/images/icons/icon-heart-01.png"



const ProductList = () => {
    const axiosInstanse = useAxios()

    const [categories, setCategories] = useState([])
    const [products, setProducts] = useState([])

    useEffect(() => {
        axiosInstanse.get(`/products/1/4`).then((res) => {
            console.log(res.data.products)
            setProducts(res.data.products)
        })
    }, [categories])

    useEffect(() => {
        axiosInstanse.get('/category').then((res) => {
            setCategories(res.data)
        })
    }, [])

    return (
        <div className="container mx-auto py-8 text-center">
            <h1 className="text-6xl text-black pt-24 font-extrabold mb-10">Store Overview</h1>
            <FilterCategory
                categories={categories}
            />
            <FilterProducts products={products}/>
        </div>
    );
};

export default ProductList;
