import React from 'react'
import Generators from './components/Generators'
import Resources from './components/Resources'

const App = () => {
  return (
    <div id='main-container'>
      <h2>Teset</h2>
			<Resources />
			<Generators />
    </div>
  )
}

export default App