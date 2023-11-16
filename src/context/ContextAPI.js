import { createContext, useContext } from "react";


export const MockStoreContext = createContext(null);

export function useCustomContex(){
    const value = useContext(MockStoreContext);
    if(value===undefined) throw new Error("useCustomContext should be used within MockStoreContext.Provider!!!")
    return value;
}