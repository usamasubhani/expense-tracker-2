import React, { useContext, useState } from 'react'
import { GlobalContext } from '../context/GlobalContext';

const NewTransaction = () => {
    const { addTransaction } = useContext(GlobalContext);

    // Local Context
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    
    // Create transaction on form submit
    const onSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        const newTransact = {
            id: Math.ceil(Math.random() * 9999),
            title,
            amount: +amount,
        }
        addTransaction(newTransact);
    }
    
    return (
        <div>
            <h3>Add Transaction</h3>
            <form onSubmit={onSubmit}>
                <input
                type="text"
                name="title"
                placeholder="Title"
                value={title}
                onChange={(e) => {setTitle(e.target.value)}}
                />
                
                <input
                type="number"
                name="amount"
                placeholder="Amount"
                value={amount}
                onChange={(e) => {setAmount(Number(e.target.value))}}
                />

                <button
                className="btn">
                    Add
                </button>
            </form>
        </div>
    )
}

export default NewTransaction
