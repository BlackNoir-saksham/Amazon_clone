import React from 'react'
import Checkout from './Checkout';
import './Cart.css'

function Cart({open, onClose}) {
    if(open===false){
        return null;
    }
  return (
    <div className='cart__checkout'>
        <Checkout/>
        <h1><button onClick={onClose}>Close</button></h1>
    </div>
  )
}

export default Cart