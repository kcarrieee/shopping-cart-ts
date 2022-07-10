export type CartItem ={
    id: number; 
    name: string;
    image:string;
    description: string;
    price: number;
    amount?: number;
}
export interface Props{
  item: CartItem[]
}