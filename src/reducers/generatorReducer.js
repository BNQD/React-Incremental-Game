const initialState = {
	ones: 0,
	purchase_amount: 1,
	gold_per_second: 0
}

const updatePerSecond = (state) => {
	return (state.ones)
}

const generatorReducer = (state = initialState, action) => {
  switch (action.type) {
		case 'UPDATE_GENERATOR':
			const newState = {...state}
			newState[action.target] = action.value
			newState.gold_per_second = updatePerSecond(newState)
			return newState
			break
		case 'UPDATE_PURCHASE_AMOUNT':
			return {...state, purchase_amount: action.value}
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

export const updatePurchaseAmount = (value) => {
	return ({
		type: 'UPDATE_PURCHASE_AMOUNT',
		value
	})
}

export default generatorReducer