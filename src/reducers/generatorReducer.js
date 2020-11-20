const initialState = {
	ones: 0
}

const generatorReducer = (state = initialState, action) => {
  switch (action.type) {
		case 'UPDATE_GENERATOR':
			const newState = {...state}
			newState[action.target] = newState[action.target] + action.value
			console.log(newState)
			return newState
			break
		default:
			break
	}
  return state
}

export const updateGenerator = (target, value) => {
	return ({
		type: 'UPDATE_GENERATOR',
		target: target,
		value: value
	})
}

export default generatorReducer