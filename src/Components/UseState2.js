//another way of setState
import { useState } from "react"

export const UseState2 = () => {
	const [student, setStudent] = useState({
		name: "mur",
		mail: "mur@.com"
	})

	function updateStu() {
		setStudent({
			name: "mal",
			mail: "mal@.com"
		})
	}
		return (<div>
			<h1>Details</h1>
			<p> {student.name}</p>
			<p> {student.mail}</p>
			<button onClick={updateStu}>click</button>

		</div>)
	}
