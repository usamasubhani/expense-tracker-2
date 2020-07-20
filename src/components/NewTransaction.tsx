import React from 'react'

const NewTransaction = () => {
    return (
        <div>
            <h3>Add Transaction</h3>
            
            <input
            type="text"
            name="title"
            placeholder="Title"
            />
            
            <input
            type="number"
            name="amount"
            placeholder="Amount"
            />

            <button
             className="btn">
                 Add
            </button>
        </div>
    )
}

export default NewTransaction
