import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext'

export const IncomeExpenses = () => {
    const { transactions } = useContext(GlobalContext);
    
    // Calculate income and expenses
    const transactioAmounts = transactions.map(transaction => transaction.amount);
    const income = transactioAmounts.filter(i => i>0).reduce((a, b) => (a+b), 0);
    const expense = -transactioAmounts.filter(i => i<0).reduce((a, b) => (a+b), 0);
    
    return (
        <div>
            <div className="inc-exp-container">
                <div>
                    <h4>Income</h4>
                    <p className="money plus">${income}</p>
                </div>
                <div>
                    <h4>Expense</h4>
                    <p className="money minus">${expense}</p>
                </div>
            </div>
        </div>
    )
}

export default IncomeExpenses;