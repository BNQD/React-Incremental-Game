import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { updateResource } from './reducers/resourceReducer'

const App = () => {
	const dispatch = useDispatch()
	
  return (
    <div id='main-container'>
      <h2>Test</h2>
			<button onClick = {() => dispatch(updateResource('gold', 1))}> Test Button </button>
    </div>
  )
}

export default App