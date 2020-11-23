import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateGenerator } from '../reducers/generatorReducer'
import { updateResource } from '../reducers/resourceReducer'

import './BuyGeneratorButtons.css'

const BuyGeneratorButtons = () => {	
	const dispatch = useDispatch()
	const generators = useSelector(state => state.generators)
	const resources = useSelector(state => state.resources)
	
	const buyAmount = generators.purchase_amount
	
	const genOneTotalCost = (type, amount) => {
		const current_gen_num = generators.ones
		const genOneCost = (number) => {
			return Math.pow(10, 1+0.05*number)
		}
		if (amount === 1){
			return Math.round(genOneCost(current_gen_num))
		} else {
			return Math.round([...Array(amount).keys()].map(x => genOneCost(x+current_gen_num)).reduce((total, x) => total + x))
		}
	}
	
	const increaseGenerator = (type, amount) => {	
		if (type === 1) {
			const gen_total_cost = genOneTotalCost(type, amount)
			console.log(gen_total_cost)
			if (resources.gold >= gen_total_cost){
				console.log('Buying')
				dispatch(updateResource('gold', -gen_total_cost))
				dispatch(updateGenerator('ones', generators.ones+amount))
			}
		}
		
	}
	
	return (
		<>
		<button className='genPurchaseButton' onClick = {() => increaseGenerator(1, buyAmount)}>
			Buy {buyAmount} Generator ({generators.ones})
			<br/>
			Cost: {genOneTotalCost(1, buyAmount)}
		</button>
		<button className='genPurchaseButton' onClick = {() => increaseGenerator(1, buyAmount)}>
			Buy {buyAmount} Generator ({generators.ones})
			<br/>
			Cost: {genOneTotalCost(1, buyAmount)}
		</button>
		<button className='genPurchaseButton' onClick = {() => increaseGenerator(1, buyAmount)}>
			Buy {buyAmount} Generator ({generators.ones})
			<br/>
			Cost: {genOneTotalCost(1, buyAmount)}
		</button>
		<button className='genPurchaseButton' onClick = {() => increaseGenerator(1, buyAmount)}>
			Buy {buyAmount} Generator ({generators.ones})
			<br/>
			Cost: {genOneTotalCost(1, buyAmount)}
		</button>
		<button className='genPurchaseButton' onClick = {() => increaseGenerator(1, buyAmount)}>
			Buy {buyAmount} Generator ({generators.ones})
			<br/>
			Cost: {genOneTotalCost(1, buyAmount)}
		</button>
		</>
	)
}

export default BuyGeneratorButtons