function outroReducer (state = [], action) {
    switch (action.type) {
        case 'INCREMENT_LIKES':
            //return the updated state
            console.log('estou no outro reducer');
            return [
                ...state
            ]
        default:
            return state;

    }
}

export default outroReducer;