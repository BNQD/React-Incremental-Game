import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import resourceReducer from './reducers/resourceReducer'

const reducer = combineReducers ({
	resource: resourceReducer
})

const store = createStore(
	reducer,
	composeWithDevTools()
)


export default store