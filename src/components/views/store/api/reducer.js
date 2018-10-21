import { SET_KEY, KEY_ERROR } from './actiontypes'; 

const initalApiState = {
    infoJobs: undefined,
    error: undefined
}

function apiReducer(state = initalApiState, action) {
    switch (action.type) {
      case SET_KEY:
        return Object.assign({}, state, {infoJobs: action.key});
      case KEY_ERROR:
        return Object.assign({}, state, {error: action.error});
      default:
        return state;
    }
}

export default apiReducer;