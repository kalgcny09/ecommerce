import { combineReducers } from 'redux';

import studentReducer from './studentReducer.js'

const rootReducer = combineReducers({
	students: studentReducer
})


export default rootReducer