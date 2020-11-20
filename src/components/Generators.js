import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateGenerator } from '../reducers/generatorReducer'

const Generator = () => {
	const dispatch = useDispatch()
	const currentGens = useSelector(state => state.generators)
	const buyOnes = (amount) => {
		dispatch(updateGenerator('ones', 1))
	}
	
	return (
		<div>
		Current: {currentGens.ones}
		<button onClick = {buyOnes}> Buy Ones </button>
		</div>
	)
}

export default Generator