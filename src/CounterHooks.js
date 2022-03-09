import React, { useState, useContext } from 'react'
import { ThemeContext } from './App'
/*export default function CounterHooks({initialCount}) {
	
	return (
		<div>
			<button>-</button>
			<span>{initialCount}</span>
			<button>+</button>
		</div>
		)
	
	
}
*/
/*
export default function CounterHooks({initialCount}) {
	
	const [state, setState] = useState({ count: initialCount })
	return (
		<div>
			<button onClick={()=> setState({count : state.count - 1})}>-</button>
			<span>{state.count}</span>
			<button onClick={()=> setState({count : state.count + 1})}>-</button>
		</div>
		)
	
	
}
*/
/*
export default function CounterHooks({initialCount}) {
	
	const [state, setState] = useState({ count: initialCount })
	return (
		<div>
			<button onClick={()=> setState( prevState =>{
			return {count : prevState.count - 1}})}>-</button>
			<span>{state.count}</span>
			<button onClick={()=> setState( prevState =>{
			return {count : prevState.count + 1}})}>+</button>
		</div>
		)
	
	
}
*/

export default function CounterHooks({initialCount}) {
	console.log("Render Counter Hooks")
	const [count, setCount] = useState(initialCount)
	const style = useContext(ThemeContext)
	return (
	
		<div>
			<button style={style}  onClick={()=> setCount(prevCount => prevCount - 1)}>-</button>
			<span>{count}</span>
			<button style={style}  onClick={()=> setCount(prevCount => prevCount + 1)}>+</button>
		</div>
		)
	
	
}