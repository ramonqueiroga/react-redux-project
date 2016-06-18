//a reducer takes in two things:

//1. the action (info about what happened)
//2. copy of current state

function postComments(state = [], action) {
    switch (action.type) {
        case 'ADD_COMMENT':
            //return the new state with the new comment
            return [
                ...state,
                {
                    user: action.author,
                    text: action.comment
                }
            ]
        case 'REMOVE_COMMENT':
            //return the new state without the deleted
            return [
                //pega todos os registro até uma posição antes do que será removido
                ...state.slice(0, action.index),
                //pula o registro que será removido e devolve todos os outros a frente dele
                ...state.slice(action.index + 1)
            ]
        default:
            return state;

    }
    return state;
}


function comments(state = [], action) {
    if(typeof action.postId !== 'undefined') {
        return {
            //take the current state
            ...state,
            //overwrite this post with a new one
            [action.postId]: postComments(state[action.postId], action)
        }
    }
    switch (action.type) {
        case 'ADD_COMMENT':
            console.log('Estamos adicionando os comentários!');
        default:
            return state;
    }

}

export default comments;