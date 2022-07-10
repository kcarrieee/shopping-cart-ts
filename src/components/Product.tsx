import { Props,CartItem } from '../types/types'


const Product = ({id, image,name,description,price }:CartItem): JSX.Element => {
  return (
    
         <div className="card" key={id}>
          <div className="card__image">
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
            <p>${price}</p>
            <button className="card__btn">
              <span>-</span><span>0</span><span>+</span>
            </button>
          </div>
        </div>
   
  )
}

export default Product