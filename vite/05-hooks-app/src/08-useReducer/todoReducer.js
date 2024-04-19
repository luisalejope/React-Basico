export const todoReducer = (initialState = [], action) => {
    switch (action?.type) {
        case 'ABC':
            throw new Error('action.type = ABC no esta implementada')
        
        case '[TODO] add todo':
            return [...initialState, action.payload]

            
        case '[TODO] delete todo': {

            const filtered = initialState.filter(todo => todo.id !== action.payload )

            return [...filtered]
        }

        case '[TODO] update todo': {

            const mapped = initialState.map(todo => {
                if (todo.id !== action.payload.id) return todo;

                return action.payload
            } )
            
            return [...mapped]
        }


        default:
            return initialState;
    }
}