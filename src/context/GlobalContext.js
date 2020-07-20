import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'

const startingState = {
    transactions: [
        { id: 1, title: 'WOW', amount:100},
        { id: 2, title: 'Nice', amount:10},
        { id: 3, title: 'Damn', amount:-30},
        { id: 4, title: 'Ok', amount:33},
        { id: 5, title: 'Done', amount:-10}
    ]
}

export const GlobalContext = createContext(startingState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, startingState);

    // Actions (will be sent to reducer)
    function deleteTransaction(id) {
      dispatch({
        type: 'delete',
        payload: id
      })
    }

    function addTransaction(transaction) {
      dispatch({
        type: 'add',
        payload: transaction
      })
    }

    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
      }}>
        {children}
      </GlobalContext.Provider>);

}