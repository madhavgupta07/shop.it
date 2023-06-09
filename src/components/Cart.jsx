import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {delCart} from '../redux/action/index'
import {addCart} from '../redux/action/index'
const Cart = () => {
    const state = useSelector((state) => state.handleCart);
    console.log(state);
    const dispatch = useDispatch();
    const handleClose = (item) => {
        dispatch(delCart(item))
    }
    const cartItems = (product) => {
        return (
            <div className="px-4 my-5 bg-light rounded-3">
                <div className="container py-4">
                <button className="btn-close float-end" aria-label='Close' onClick={() => handleClose(product)}></button>
                    <div className="row">
                        <div className="col-md-4">
                            <img src={product.image} alt={product.title} height="200px" width="180px" />
                        </div>
                        <div className="col-md-4">
                            <h3>{product.title}</h3>
                            <p className="lead fw-bold">
                                {product.qty} X $ {product.price} = $ {product.qty * product.price} 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    const EmptyCart = () => {
        return (
            <>
                <div className="px-4 my-5 bg-light rounded-3">
                    <div className="container py-4">
                        <h3>Your cart is empty</h3>
                    </div>
                </div>
            </>
        )
    }
  return (
    <>
        {state.length === 0 && <EmptyCart/> }
        {state.length !== 0 && state.map(cartItems)}
    </>
  )
}

export default Cart