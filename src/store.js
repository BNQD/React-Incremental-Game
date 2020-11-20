import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import resourceReducer from './reducers/resourceReducer'
import generatorReducer from './reducers/generatorReducer'
import timeReducer from './reducers/timeReducer'

const reducer = combineReducers ({
	resources: resourceReducer,
	generators: generatorReducer,
	time: timeReducer
})

const store = createStore(
	reducer,
	composeWithDevTools()
)


export default store