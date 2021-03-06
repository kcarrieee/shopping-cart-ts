
import Product from "../components/Product";
import Hero from "../components/Hero";
import { useQuery } from 'react-query'
import { CartItem } from '../types/types'




const getProducts = async(): Promise<CartItem[]> =>{
  return await (await fetch('https://62ca807c1eaf3786ebac401d.mockapi.io/products')).json()
}

const Home = () => {
  const {data, isLoading, error} = useQuery<CartItem[]>('products', getProducts)
  if(isLoading) return <div className="loading"><div className="inner-loader"></div></div>
  if(error) return <p>Somehting went wrong</p>
  

  return (
    <>
    <Hero/>
    <main>
      <section className="container products">
      {data?.map(item=>(
          <Product {...item}/>
       ))}
     </section>
    </main>
    </>
  )
}

export default Home