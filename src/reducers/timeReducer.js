const initialState = {
	time_factor: 1000
}

const timeReducer = (state = initialState, action) => {
  switch (action.type) {
		case 'UPDATE_TIME_FACTOR':
			return action.time_factor
			break
		default:
			break
	}
  return state
}

export const updateTime = (time_factor) => {
	return ({
		type: 'UPDATE_TIME_FACTOR',
		time_factor
	})
}

export default timeReducer