import {useState, createContext,useContext} from "react"

export const Context2= createContext(0);
export const useCount = () => useContext (Context2);

export const CountProvider =({children})=> {
    const [count, setCount]=useState();
    const agregacontador= (n) => {
        // (count + n <= stock) && (count + n >= 1) ? setCount (count + n) : alert("Estas seleccionando el 0 o superando el stock")};
        setCount(12)
    }
    
    
    return(
        <Context2.Provider value={{count,agregacontador}}>
            {children}</Context2.Provider>
    )
}