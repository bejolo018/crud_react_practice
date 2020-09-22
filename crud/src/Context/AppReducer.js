export default (state, action) => {
    switch(action.type){
        case 'ADD_NAME':
            return {
                names: [action.payload, ...state.names]
            }

        case 'EDIT_NAME':
            const updatedName = action.payload

            const updateNames = state.names.map(name => {
                if(name.id === updatedName.id){
                    return updatedName
                }
                return name;
            })
            
            return {
                names: updateNames
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