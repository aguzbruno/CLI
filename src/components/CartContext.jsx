import {useState, createContext,useContext} from "react"

export const CartContext= createContext();
export const useCart = () => useContext (CartContext);
export let itemsencarrito = [];


export const CartProvider =({children})=> {
    const [cart, setCart] = useState ({itemsencarrito: [], cantidad:0});
    
    const addItem=(item)=>{
        setCart({...cart, itemsencarrito:
            [...cart.itemsencarrito, item] })

    }
    return(
        <CartContext.Provider value={{cart,addItem}}>
            {children}</CartContext.Provider>


    )
}