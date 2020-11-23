import React from 'react'
import Generators from './components/Generators'
import Resources from './components/Resources'
import BuyGeneratorButtons from './components/BuyGeneratorButtons'
import GeneratorPurchaseAmounts from './components/GeneratorPurchaseAmounts'

const App = () => {
  return (
    <div id='main-container'>
      <h2>Teset</h2>
			<Resources />
			<GeneratorPurchaseAmounts />
			<BuyGeneratorButtons />
    </div>
  )
}

export default App