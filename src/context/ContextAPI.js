import { createContext, useContext, useState } from "react";


export const MockStoreContext = createContext(null);

export function useCustomContex(){
    const value = useContext(MockStoreContext);
    if(value===undefined) throw new Error("useCustomContext should be used within MockStoreContext.Provider!!!")
    return value;
}





 const TabContext = createContext();
 export function TabContextProvider({children}){
    const tab = useState(0);
    return (
        <TabContext.Provider value={tab}>
            {children};
        </TabContext.Provider>
    )
 }
export function useCustomTabContext(){
    const value = useContext(TabContext)
    if(value===undefined){
        throw new Error("Please being used within TabContext");
    }

    return value
}
