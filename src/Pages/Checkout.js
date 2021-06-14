import React from 'react'
import Header from '../components/Header';
import '../styles/Checkout.css'
import LocalMallRoundedIcon from '@material-ui/icons/LocalMallRounded';
import {useSelector} from "react-redux";
import CartProduct from '../components/CartProduct'
import {selectItems, selectTotal} from '../slices/basketSlice';
import Footer from '../components/Footer';
function Checkout() {
    const items = useSelector(selectItems);
    const Total  = useSelector(selectTotal);
    return (
        <div className="checkout">
            <Header />
            <main>
                {/* Left Section */}
                <div className="left__section">
                    <div className="banner">
                        <LocalMallRoundedIcon className="banner_logo"/>
                        <span>Welcome to Checkout</span>
                    </div>
                    <div className="shopping__basket">

                        <p>{(items.length==0) ? "Basket is Empty": "Your Basket" }</p>
                        {items.map((ele)=>{
                            return  <CartProduct id={ele.id} title={ele.title} price={ele.price} description={ele.description} category={ele.category} image={ele.image}/> 
                        })}
                    </div>
                </div>
                {/* Right */}
                <div className="right__section">
                    <button className={(items.length==0) ? `checkout__btn` : "checkout__btn__active"}>CheckOut</button>
                    <p>Total Price {Total}$</p>
                </div>
            </main>
            <Footer/>
        </div>
    )
}

export default Checkout
