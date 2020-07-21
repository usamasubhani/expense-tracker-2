import React, { useContext } from 'react';
import Transaction from './Transaction'

import { GlobalContext } from '../context/GlobalContext'

 function TransactionsList() {
    const { transactions } = useContext(GlobalContext);

    return (
        <div>
            <h3>Transactions</h3>
            <ul className="list">
            {transactions.map(transaction => (<Transaction key={transaction.id}
            id={transaction.id}
            title={transaction.title}
            amount={transaction.amount} />))}    
            </ul>
        </div>
    )
}

export default TransactionsList;