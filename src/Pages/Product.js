import React, {useState, useEffect} from "react"
import {useSelector} from "react-redux";
import {selectedItem} from "../slices/productSlice";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/Product.css";
function Product({id}) {
    const selected = useSelector(selectedItem);
    const [item, setItem] = useState({});
    console.log(selected);
    useEffect(() => {
        const getItem = ()=>{
            fetch(`https://fakestoreapi.com/products/${selected.id}`).then((res)=>res.json()).then((data)=>{
                setItem(data);
            })
        }
        getItem();
    }, [])
    return (
        <main>
            <Header></Header>
            <div className="product__page">
                <div className="product__image__section">
                    <img src={item.image} alt="" />
                
                </div>
                <div class="product__info__section">
                    <p className="product__info__section__title">{item.title}</p>
                    <p className="product__info__section__description">{item.description}</p>
                    <div className="price__section">
                        <p>{item.price}$</p>
                        <button>Add to Cart</button>
                    </div>
                </div>
            </div>
            <Footer></Footer>

        </main>
    )
}

export default Product
