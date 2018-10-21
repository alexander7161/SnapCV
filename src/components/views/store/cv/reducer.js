import { SET } from './actiontypes'; 

function cvReducer(state = {}, action) {
    switch (action.type) {
      case SET:
        return Object.assign({}, state, action.data);
      default:
        return state;
    }
}

export default cvReducer;