import React, { Component } from 'react'

export default class Counter extends Component{
	constructor(props) {
		super(props)
		
		this.state = {
			count: props.initialCount
	
		}
	}
	render(){
		 console.log("Render Counter")
		return (
		<div>
			<button onClick={() => this.changeCount(-1)}>-</button>
				{/* <span>{this.props.initialCount}</span> */}
			<span>{this.state.count}</span>
			<button onClick={() => this.changeCount(1)}>+</button>
		</div>
		)
	}
	 changeCount(amount){
		 // 0
		 // this.steState({ count: 0 + 1 })
		 // this.steState({ count: 0 + 1 })
		 //this.setState({ count : this.state.count + amount})
		 //this.setState({ count : this.state.count + amount})
		 
		this.setState( prevState => {
			return { count: prevState.count + amount}
			})
		//this.setState( prevState => {
		//	return { count: prevState.count + amount}
		//	})
		}
}