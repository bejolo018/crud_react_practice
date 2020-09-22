export default (state, action) => {
    switch(action.type){
        case 'REMOVE_USER':
            return {
                names: state.names.filter( name => {
                    return name.id !== action.payload
                })
            }

        default:
            return state
    }
}