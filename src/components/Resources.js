import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateGenerator } from '../reducers/generatorReducer'
import { updateResource } from '../reducers/resourceReducer'
import { updateTime } from '../reducers/timeReducer'
import ReactInterval from 'react-interval'



const Generator = () => {
	const dispatch = useDispatch()
	const resources = useSelector(state => state.resources)
	const time = useSelector(state => state.time.time_factor)
	const increaseOne = () => {
		dispatch(updateResource('gold', 1))
	}
	
	
	
	return (
		<div>
			Gold: {resources.gold}
			<button onClick = {() => dispatch(updateResource('gold', 1))}> Plus One </button>
			<ReactInterval timeout={time} enabled={true}
				callback={increaseOne} />
		</div>
	)
}

export default Generator
	