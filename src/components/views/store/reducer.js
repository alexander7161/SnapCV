import { SET_KEY } from './actiontypes'; 
const initalApiState = {
    infoJobs: undefined
}

function apiReducer(state = initalApiState, action) {
    switch (action.type) {
      case SET_KEY:
        return Object.assign({}, state, {infoJobs: action.key});
      default:
        return state;
    }
}

export default apiReducer;