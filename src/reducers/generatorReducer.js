const initialState = {
	ones: 0,
	purchase_amount: 1
}

const generatorReducer = (state = initialState, action) => {
  switch (action.type) {
		case 'UPDATE_GENERATOR':
			const newState = {...state}
			newState[action.target] = newState[action.target] + action.value
			console.log(newState)
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