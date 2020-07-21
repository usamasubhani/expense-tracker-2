import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext'

export const Balance = () => {
    const { transactions } = useContext(GlobalContext);
    
    // Calculate balance
    const transactioAmounts = transactions.map(transaction => transaction.amount);
    const balance = transactioAmounts.reduce((a, b) => (a + b), 0);

    return (
        <div>
            <h4>Balance:</h4>
            <h1>${balance}</h1>
        </div>
    )
}

export default Balance;
