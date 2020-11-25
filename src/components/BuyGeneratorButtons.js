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
	
	const genTotalCost = (type, amount) => {
		switch (type){
			case 'ones':
				const current_gen_num = generators[type]
				const genOneCost = (number) => {
					return Math.pow(10, 1+0.05*number)
				}
				if (amount === 1){
					return Math.round(genOneCost(current_gen_num))
				} else {
					return Math.round([...Array(amount).keys()].map(x => genOneCost(x+current_gen_num)).reduce((total, x) => total + x))
				}
			case 2:
				break
			case 3:
				break
			case 4:
				break
			case 5:
				break
			default:
				console.error('No Gen Match for genTotalCost')
		}
		
	}
	
	const increaseGenerator = (type) => {	
		const gen_total_cost = genTotalCost(type, buyAmount)
		if (resources.gold >= gen_total_cost){
			switch (type) {
				case 'ones':
					dispatch(updateResource('gold', -gen_total_cost))
					dispatch(updateGenerator('ones', generators.ones+buyAmount))
					break
				case 2:
					break
				case 3:
					break
				case 4:
					break
				case 5:
					break
				default:
					console.error('No gen match for increaseGenerator')
			}
		} else {
			console.log('Not enough gold')
		}
		
	}
	
	return (
		<>
		<button className='genPurchaseButton' onClick = {() => increaseGenerator('ones', buyAmount)}>
			Buy {buyAmount} Generator ({generators.ones})
			<br/>
			Cost: {genTotalCost('ones', buyAmount)}
		</button>
		<button className='genPurchaseButton' onClick = {() => increaseGenerator(2, buyAmount)}>
			Buy {buyAmount} Generator ({generators.ones})
			<br/>
			Cost: {genTotalCost(2, buyAmount)}
		</button>
		<button className='genPurchaseButton' onClick = {() => increaseGenerator(3, buyAmount)}>
			Buy {buyAmount} Generator ({generators.ones})
			<br/>
			Cost: {genTotalCost(3, buyAmount)}
		</button>
		<button className='genPurchaseButton' onClick = {() => increaseGenerator(4, buyAmount)}>
			Buy {buyAmount} Generator ({generators.ones})
			<br/>
			Cost: {genTotalCost(4, buyAmount)}
		</button>
		<button className='genPurchaseButton' onClick = {() => increaseGenerator(5, buyAmount)}>
			Buy {buyAmount} Generator ({generators.ones})
			<br/>
			Cost: {genTotalCost(5, buyAmount)}
		</button>
		</>
	)
}

export default BuyGeneratorButtons