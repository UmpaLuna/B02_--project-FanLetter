import { createContext, useContext, useState } from "react";


export const MockStoreContext = createContext(null);

export function useCustomContex(){
    const value = useContext(MockStoreContext);
    if(value===undefined) throw new Error("useCustomContext should be used within MockStoreContext.Provider!!!")
    return value;
}





//  const TabContext = createContext();
//  export function TabContextProvider({children}){
//     const tab = useState(0);
//     return (
//         <TabContext.Provider value={tab}>
//             {/* children이 없으면 UI 내용물 안보임 */}
//             {children};
//         </TabContext.Provider>
//     )
//  }
// export function useCustomTabContext(){
//     const value = useContext(TabContext)
//     if(value===undefined){
//         throw new Error("Please being used within TabContext");
//     }

//     return value
// }


const TabValueContext = createContext();
const TabActionsContext = createContext();
export function TabContextProvider({children}){
    const [tab,setTab] = useState(0);
    const actions = {
        changeTab(arg){
        setTab(arg)
        },
        eventChangeTab(e){
            setTab(e.target.value)
        },
    }

    return (
        <TabActionsContext.Provider value={actions}>
            <TabValueContext.Provider value={tab}>
                {children}
            </TabValueContext.Provider>
        </TabActionsContext.Provider>   
    )
}

export function useCustomTabValueContext(){
    const value = useContext(TabValueContext);
    if(value===undefined){
        throw new Error("Please being used within TabValueContext")
    }
    return value
}

export function useCustomTabActionsContext(){
    const value = useContext(TabActionsContext);
    if(value === undefined){
        throw new Error("Please being used within TabActionsContext")
    }
    return value
}