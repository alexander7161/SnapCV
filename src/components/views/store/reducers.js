import { combineReducers } from 'redux'
import apiReducer from './api/reducer'
import cvReducer from "./cv/reducer"

export default combineReducers({api:apiReducer, cv: cvReducer})
