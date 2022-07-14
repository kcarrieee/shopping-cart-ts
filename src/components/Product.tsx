import { useShoppingCart } from '../context/ShoppingCartContext'
import { CartItem } from '../types/types'
import {formatCurrency} from '../utils/formatCurrency'


const Product = ({ id, image,name,description,price }:CartItem): JSX.Element => {
  
  const {getQuantity, incQuantity, decQuantity} = useShoppingCart()
  const num = getQuantity(id)
  
  return (
    
         <div className="card" key={id}>
          <div className="card__image">
            {num === 0 ? null : (<div className='overlay'> <p>{num}</p></div>)}
            <img
              src={image}
              alt="chair"
            />
          </div>
          <h3>{name}</h3>
          <p>
            {description}
          </p>
          <div className="card__price">
            <p>{formatCurrency(price)}</p>
            <div>
              {num === 0 ? <button className="card__btn" onClick={()=>incQuantity(id)}>Add to cart</button> :(<button className="card__btn"><span onClick={()=>decQuantity(id)}>-</span><span>{num}</span><span onClick={()=>incQuantity(id)}>+</span></button>) }
            </div>
          </div>
        </div>
   
  )
}

export default Product