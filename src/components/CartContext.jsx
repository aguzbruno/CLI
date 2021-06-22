import {useState, createContext,useContext} from "react"

export const CartContext= createContext();
export const useCart = () => useContext (CartContext);
export let itemsencarrito = [];




export const CartProvider =({children})=> {
    const [cart, setCart] = useState ([{item:"",cantidad:"",precio:0,id:""}]);
    
    const addItem=(item1,cantidad1,precio1,id1)=>{
        setCart([...cart,{item:item1,cantidad:cantidad1,precio:precio1, id:id1}]);

    }
    return(
        <CartContext.Provider value={{cart,addItem,}}>
            {children}</CartContext.Provider>
    )
}
