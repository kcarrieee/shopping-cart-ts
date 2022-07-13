import { Product, CartItem } from '../types/types'
import { useShoppingCart ,getProducts } from '../context/ShoppingCartContext'
import { useQuery } from 'react-query'



const CartItemSmall = ({ id, quantity }:Product ) => {

    const {removeQuantity} = useShoppingCart()
    const {data} = useQuery<CartItem[]>('products', getProducts)
    const item = data?.find(item => item.id === id)
    if(item === null) return null
  return (
    <div className='cart__item'>
      <div className='product__desc'>
      <div className='cart__item__img'>
        <img src={item?.image} alt="product" />
      </div>
      <div>
      <p>{item?.name}</p>
      <p> <strong> ${item?.price} </strong></p>
      {quantity >1 && ( <p> x {quantity}</p>)}
      </div>
      </div>
      <div className='total'>
        <p>${ item?.price ? item.price * quantity: null }</p>
        <button className='removeAll-btn' onClick={()=>removeQuantity(item!.id)}>╳</button>
      </div>
    </div>
  )
}

export default CartItemSmall