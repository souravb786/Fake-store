import React from 'react'
import '../styles/ProductCard.css'
import  FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';
import {useDispatch} from "react-redux";
import {addToBasket} from "../slices/basketSlice";
import {changeProduct} from "../slices/productSlice";
import {Link} from 'react-router-dom'

function ProductCard({id, title, price, description, category, image}) {
    const dispatch = useDispatch();

    const addItemToBasket = () => {
        const product = {
            id, title, price, description, category, image
        }
        // sending the product as an action to the REDUX store.. the basket slice
        dispatch(addToBasket(product))
    }
    const changeSelectedItem = () => {
        const p = {id};
        dispatch(changeProduct(p));
    }
    return (
        <div  className="product" >
            
                <div className="top"><FavoriteBorderRoundedIcon /><p className="price">{price}$</p></div>
                <Link to={`Home/${id}`} onClick={changeSelectedItem} className="middle">
                    <img src={image} alt="" />
                    <div><p className="title">{title}</p></div>
                </Link>
                <div className="product__footer">
                    <button className="buy__now">Buy Now</button>
                    <button onClick={addItemToBasket} className="add__to__cart">Add to <ShoppingCartRoundedIcon /></button>
                </div>
            
        </div>
        
    )
}

export default ProductCard
