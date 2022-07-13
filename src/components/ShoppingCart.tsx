import { useShoppingCart,getProducts } from '../context/ShoppingCartContext'
import CartItemSmall from './CartItemSmall'
import { useQuery } from 'react-query'
import {CartItem } from '../types/types'


type Props={
    isOpen: Boolean
}

const ShoppingCart = ({isOpen}:Props) => {
    const {closeCart,cartItems, cartQuantity} = useShoppingCart()
    const {data} = useQuery<CartItem[]>('products', getProducts)

    if(!isOpen){
        return(
            <></>
        )
    }
  return (
    <div className='shopping-cart'> 
    <div className='shopping-cart__title'>
        <h2>Cart</h2>
        <button onClick={closeCart} className='close-btn' >close</button>
    </div>
    <div className='shopping-cart__items'>
        {cartItems.map(item =>{
            return(
                <CartItemSmall key={item.id} {...item}/>
            )
        })}

    </div>
    <div className='check-out'>
    <button className='pay-now-btn'>Pay now</button>
    <p>Total: ${cartItems.reduce((total, cartitem) => 
    {const item = data?.find(item => item.id === cartitem.id)
        return total + (item?.price || 0) * cartitem.quantity
    },0)
    }</p>
    </div>

    </div>
   
  )
}

export default ShoppingCart