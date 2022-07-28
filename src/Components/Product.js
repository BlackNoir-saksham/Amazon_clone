import React from 'react'
// import Iphone from '../elements/iphone.jpg'
import './Product.css'
import { useStateValue } from './StateProvider'

function Product({id,title,price,image,rating}) {
    const[ , dispatch ] = useStateValue();

    const addToBasket = () => {
       
        dispatch({
            type: 'ADD_TO_BASKET',
            item:{
                id:id,
                title:title,
                image:image,
                price:price,
                rating:rating,
            },
        })
    }



  return (
    <div className='product'>
        <div className='product__info'>
            <p>{title}</p>
            <p className='product__price'>
                <b>$</b>
                <strong>{price}</strong>
            </p>
            <div className='product__rating'>
                {Array(rating).fill().map((_,i) => (
                    <p>⭐</p>
                ))}
            </div>
        </div>
        <img className='image' src={image} alt='logo'/>
        <button onClick={addToBasket}>Add to Cart</button>
    </div>
  )
}

export default Product
