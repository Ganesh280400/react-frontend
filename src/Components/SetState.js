import React, { useState } from "react"

//setState used for in class component
 class SetState extends React.Component{
	constructor(props){
		super(props)
		this.state={
			StuName:"kohli",
			StuMail:"kohli@.com",
			StuPhn:"1818181818"

		}
	}

	updStd(){
		this.setState({
			StuName:"sachin",
			StuMail:"sachin@.com",
			StuPhn:"1010101010"
			
		})
	}
	render(){
		return(<div> 
			<h1>Student Details </h1>
		
			<p> {this.state.StuName}</p>
			<p> {this.state.StuMail}</p>
			<p> {this.state.StuPhn}</p>
		<button onClick={()=> this.updStd()}>click</button>
		</div>
		)
	}
}
export default SetState


