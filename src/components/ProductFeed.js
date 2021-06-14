import React, {useState, useEffect} from 'react'
import ProductCard from './ProductCard.js'
import '../styles/ProductFeed.css';
function ProductFeed() {
    const [selectedCategory, setSelectedCategroy] = useState("All");
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    useEffect(()=>{
        const getCategory = () => {
            fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json()).then((data)=>{
                console.log(data);
                setCategories(data);
            })
        }
        getCategory();
    },[])

    useEffect(()=>{
        const getProducts = () => {
        fetch((selectedCategory!="All") ? `https://fakestoreapi.com/products/category/${selectedCategory}` : "https://fakestoreapi.com/products" )
                .then(res=>res.json()).then((data)=>{
                setProducts(data);
                })
        
        }
        getProducts();
    },[selectedCategory]);
    return (
        <>
            <div className="options">
                <span>Shop by Category</span>
                <select name="category" id="" onChange={(e)=>{setSelectedCategroy(e.target.value)}}>
                    <option value="All"> All</option>
                    {categories.map((item)=>{
                        return <option value={item}>{item}</option>
                    })}
                </select>
            </div>
            <div className="product__feed">
            {
                products.map(({id, title, price, description, category, image})=>{
                    return <ProductCard 
                        key={id}
                        id = {id}
                        title = {title}
                        price={price}
                        description = {description}
                        category = {category}
                        image = {image}
                    />
                })
            }
            </div>
        </>
        
    )
}

export default ProductFeed
