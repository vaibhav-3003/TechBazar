/*
1. First create a context
2. Make Provider
3. Consumer -> useContext() Hook
*/

import { createContext } from "react";

const AppContext = createContext();

const AppProvider = ({children}) =>{
    return <AppContext.Provider value="vaibhav">
        {children}
    </AppContext.Provider>
}

export {AppProvider}

