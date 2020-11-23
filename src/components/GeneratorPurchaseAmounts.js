import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { updatePurchaseAmount } from '../reducers/generatorReducer'

import './GeneratorPurchaseAmounts.css'

const GeneratorPurchaseAmounts = () => {	
	const dispatch = useDispatch()
	const updateBuyAmount = (value) => {
		dispatch(updatePurchaseAmount(value))
	}
	
	return (
		<div id='buy-amount-button-container'>
			<div className ='horizontal-centered'>
				<button className = 'buy-amount-button' onClick = {() => updateBuyAmount(1)}> 1 </button>
				<button className = 'buy-amount-button' onClick = {() => updateBuyAmount(10)}> 10 </button>
				<button className = 'buy-amount-button' onClick = {() => updateBuyAmount(100)}> 100 </button>
				<button className = 'buy-amount-button' onClick = {() => updateBuyAmount(100)}> Max </button>
			</div>
		</div>
	)
}

export default GeneratorPurchaseAmounts