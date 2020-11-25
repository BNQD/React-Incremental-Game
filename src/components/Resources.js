import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateGenerator } from '../reducers/generatorReducer'
import { updateResource } from '../reducers/resourceReducer'
import { updateTime } from '../reducers/timeReducer'
import ReactInterval from 'react-interval'

import './Resources.css'

const Generator = () => {
	const dispatch = useDispatch()
	const resources = useSelector(state => state.resources)
	const goldPerSecond = useSelector(state => state.generators).gold_per_second
	const time = useSelector(state => state.time.time_factor)
	const increaseByGenerators = () => {
		console.log(goldPerSecond)
		dispatch(updateResource('gold', goldPerSecond))
	}
	
	
	
	return (
		<div id='resources-container' className='horizontal-centered'>
			<div id='gold-container'>
				<p> Gold: {resources.gold} </p>
				<p> GPS: {goldPerSecond} </p>
			</div>
			<ReactInterval timeout={time} enabled={true}
				callback={increaseByGenerators} />
		</div>
	)
}

export default Generator
	