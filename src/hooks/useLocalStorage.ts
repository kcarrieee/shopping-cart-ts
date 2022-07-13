import { useEffect, useState } from "react";

export function useLocalStorage<T>(key: string, initial : T | (()=> T)){
    const [value, setValue] = useState<T>(()=>{
        const jsonVal = localStorage.getItem(key)
        if(jsonVal !== null) return JSON.parse(jsonVal)

        if(typeof initial === "function") {
            return (initial as () => T)()
        }else{
            return initial
        }
    })

    useEffect(()=>{
        localStorage.setItem(key, JSON.stringify(value))
    },[key, value])

    return [value, setValue] as [T, typeof setValue]

}