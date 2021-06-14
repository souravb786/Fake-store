import '../styles/CartProduct.css'
import DeleteIcon from '@material-ui/icons/Delete';
import {useDispatch} from "react-redux";
import {removeFromBasket} from "../slices/basketSlice"
function CartProduct({id, title, price, description, category, image}) {
    const Dispatch = useDispatch();
    const removeItemFromBasket = () => {
        const prod = {id, title, price, description, category, image};
        Dispatch(removeFromBasket(prod));
    }
    return (
        <div className="cart__product">
            <div className="image__section">
                <img src={image} alt="" />
            </div>
            <div className="info__section">
                <p className="title">{title}</p>
                <p className="description">{description}</p>
                <div className="button__div">
                    <button onClick={removeItemFromBasket}>Remove <DeleteIcon /></button>
                </div>
            </div>
        </div>
    )
}

export default CartProduct
