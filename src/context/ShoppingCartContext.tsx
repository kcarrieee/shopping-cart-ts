import { createContext, useContext, useState } from "react"
import ShoppingCart from "../components/ShoppingCart"
import {ShoppingCartContextPros, ShoppingCartContextType, Product, CartItem } from '../types/types'
import { useLocalStorage } from '../hooks/useLocalStorage'


const ShoppingCartContext = createContext({} as ShoppingCartContextType)


export function useShoppingCart(){
    return useContext(ShoppingCartContext)
}

 export const getProducts = async(): Promise<CartItem[]> =>{
  return await (await fetch('https://62ca807c1eaf3786ebac401d.mockapi.io/products')).json()
}

export function ShoppingCartProvider({children}:ShoppingCartContextPros){
    const [cartItems, setCartItems] = useLocalStorage<Product[]>('cart-items',[])
    const [isOpen, setIsOpen] = useState<Boolean>(false)

    

    const getQuantity=(id: number)=>{
        return cartItems.find(item=> item.id === id )?.quantity || 0
    }
    const incQuantity=(id: number)=>{
        setCartItems(currentItems => {
            if(currentItems.find(item=> item.id === id )== null) {
                return [...currentItems,{id, quantity: 1} ]
            }else{
                return currentItems.map(item=>{
                    if(item.id === id){
                        return {...item, quantity: item.quantity + 1}
                    }else{
                        return item
                    }
                })
            }
        })
        
    }
     const decQuantity=(id: number)=>{
        setCartItems(currentItems => {
            if(currentItems.find(item=> item.id === id )?.quantity === 1) {
                return currentItems.filter(item => item.id !== id)
            }else{
                return currentItems.map(item=>{
                    if(item.id === id){
                        return {...item, quantity: item.quantity - 1}
                    }else{
                        return item
                    }
                })
            }
        })
        
    }
    const removeQuantity=(id: number)=>{
        setCartItems(currentItems => {
            return currentItems.filter(item => item.id !== id)
        })
    }
    const cartQuantity = cartItems.reduce((quantity, item)=> item.quantity + quantity,0)

    const openCart=()=> setIsOpen(true)
    const closeCart=()=> setIsOpen(false)

    return(
        <ShoppingCartContext.Provider value={{
            getQuantity,
            incQuantity,
            decQuantity,
            removeQuantity,
            cartItems,
            cartQuantity,
            openCart,
            closeCart
             }}>
            {children}
            <ShoppingCart isOpen={isOpen} />
        </ShoppingCartContext.Provider>
    )
}