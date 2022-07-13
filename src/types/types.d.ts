import { ReactNode } from "react";

export type CartItem ={
    id: number; 
    name: string;
    image:string;
    description: string;
    price: number;
}
export interface Props{
  item: CartItem[]
}

export type ShoppingCartContextPros={
  children: ReactNode
}

export type ShoppingCartContextType={
  openCart: ()=>void
  closeCart: ()=>void
  getQuantity: (id: number) => number
  incQuantity: (id: number) => void
  decQuantity: (id: number) => void
  removeQuantity: (id: number) => void
  cartQuantity: number
  cartItems: Product[]
}

export type Product ={
  id: number
  quantity: number
}