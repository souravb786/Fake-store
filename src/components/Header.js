import React, {useState} from 'react'
import '../styles/Header.css';
import LocalMallRoundedIcon from '@material-ui/icons/LocalMallRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';
import { Avatar } from '@material-ui/core';
import {Link} from "react-router-dom";
import { useSelector } from "react-redux"
import { selectItems} from "../slices/basketSlice";
function Header() {
    const [searchVal, setSearchVal] =  useState("");
    const items = useSelector(selectItems);
    return (
        <div className="header">
            <div className="left">
                <Link className="left__wrapper" to="/">
                    <p className="logo">fakeStore</p> <LocalMallRoundedIcon  className="logo__icon"/>
                </Link>
                
            </div>
            <div className="middle">

                <div className="middle__wrapper">
                    <input type="text" name="search__bar" id="" value={searchVal} onChange={(e)=>{setSearchVal(e.target.val)}} className="search__bar"/>
                    <SearchRoundedIcon />
                </div>
                
            </div>
            <div className="right">
                <div className="right__wrapper">
                    <div className="user">
                        <Avatar src="https://lh3.googleusercontent.com/ogw/ADea4I66tSIMKgeu6d6yhdV8-ok3jn1P1msAbfv0uPhYmg=s32-c-mo"/>
                        <span>Sourav</span>
                    </div>
                    <Link to="/Checkout" className="right__icon">
                        <ShoppingCartRoundedIcon className="cart" />
                        <div className="items">
                            <span >{items && items.length}</span>
                        </div>
                    </Link>
                </div>
                
            </div>
        </div>
    )
}

export default Header
