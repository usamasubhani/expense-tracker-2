import React, { useReducer } from 'react';
import './App.css';

// Components
import NewTransaction from './components/NewTransaction'
import TransactionsList from './components/TransactionsList';

import { GlobalProvider } from './context/GlobalContext';
// import AppReducer from './context/AppReducer';
function App() {

  return (
    <GlobalProvider>
    {/* <AppContextProvider value={{transactions: state.transactions}}> */}
      <div className="App">
        <NewTransaction />
        <TransactionsList />
      </div>
    </GlobalProvider>
  );
}

export default App;
