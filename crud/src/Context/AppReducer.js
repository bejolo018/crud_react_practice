export default (state, action) => {
    switch(action.type){
        case 'ADD_NAME':
            return{
                names: [action.payload, ...state.names]
            }

        case 'REMOVE_NAME':
            return {
                names: state.names.filter( name => {
                    return name.id !== action.payload
                })
            }

        default:
            return state
    }
}