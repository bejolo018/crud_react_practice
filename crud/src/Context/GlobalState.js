import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'

//Initial State
const initialState = {
    names: [
        {id:1, name:'Name One'},
        {id:2, name:'Name Two'},
        {id:3, name:'Name Three'},
    ]
}

// Create Context
export const GlobalContext = createContext(initialState)

// Provider Component
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    return(
        <GlobalContext.Provider value={{
            names: state.names
        }}>
            {children}
        </GlobalContext.Provider>
    )
}
