import { useState } from "react"

const UseStateFun = () => {
    const [name, setName] = useState("bujji")
    const [mobile, setMobile] = useState("9701579872")

    function setUpdate() {
        setName("chinna")
        setMobile("9876543210")
    }
    return (<div>
        <h1> Display details</h1>
        <p> {name}</p>
        <p> {mobile}</p>
        <button onClick={setUpdate}>click me</button>
    </div>)
}
export default UseStateFun

