import React, {useState, useEffect} from 'react'
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import '../styles/Home.css';
import Footer from '../components/Footer';
function Home() {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        const getProducts = () => {
        fetch('https://fakestoreapi.com/products')
                .then(res=>res.json()).then((data)=>{
                setProducts(data);
                })
        
    }
    getProducts();
  },[]);
  return (
    <div className="home">
        <Header />
        <div className="product__feed">
            {
                products.map(({id, title, price, description, category, image})=>{
                    return <ProductCard 
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
        <Footer></Footer>
    </div>
  );
}

export default Home
