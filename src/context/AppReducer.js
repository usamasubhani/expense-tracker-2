export default (state, action) => {
    switch(action.type) {
        case 'delete':
            return {
                transactions: state.transactions.filter(t => t.id !== action.payload)
            }
        case 'add':
            return {
                ...state,
                transactions: [action.payload, ...state.transactions]
            }
        default:
            return state;
    }
}