import { useState } from "react"

//event handling

export const EveHandling=()=>{
	const[score,updScore]=useState(0)
	function updateScore(){
		updScore(score+1)
		
	}
	function reset(){
		updScore(0)
	}
	return(<div>
		<h1> Cricket Score</h1>
		<p> cricket score:{score}</p>
		<button onClick={updateScore}> score</button>
		<button onClick={reset}> reset	</button>
		</div>
	
	)

}