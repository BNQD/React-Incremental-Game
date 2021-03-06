const initialState = {
	gold: 10
}

const resourceReducer = (state = initialState, action) => {
  switch (action.type) {
		case 'UPDATE_RESOURCE':
			const newState = {...state}
			newState[action.target] = newState[action.target] + action.value
			return newState
			break
		default:
			break
	}
  return state
}

export const updateResource = (target, value) => {
	return ({
		type: 'UPDATE_RESOURCE',
		target: target,
		value: value
	})
}

export default resourceReducer