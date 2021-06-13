import React from 'react'
import '../styles/ProductCard.css'
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';
function ProductCard({id, title, price, description, category, image}) {
    return (
        <div className="product">
            <div className="top"><FavoriteBorderRoundedIcon /><p className="price">{price}$</p></div>
            <div className="middle">
                <img src={image} alt="" />
                <div><p className="title">{title}</p></div>
            </div>
            <div className="product__footer">
                <button className="buy__now">Buy Now</button>
                <button className="add__to__cart">Add to <ShoppingCartRoundedIcon /></button>
            </div>
        </div>
    )
}

export default ProductCard
