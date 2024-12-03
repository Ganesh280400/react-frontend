
//conditional rendering
import { useState } from "react"

export const CondRend = () => {

    const [isLogged, setLogin] = useState(false)
    let someStr;
    if (isLogged) {
        someStr = <p>welcome,user</p>
    }
    else {
        someStr=<p>please login!</p>
    }
    function isLoggedFun() {
        setLogin(true)
    }
    return (<div>
        <h1>logn details</h1>
        <p> {someStr}</p>
        <button onClick={isLoggedFun} >login</button>

    </div>)
}