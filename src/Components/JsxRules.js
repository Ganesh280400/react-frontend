const JsxRules =()=>{
    let a=25
    const b=5*9

    function sample(){
        alert("this is jsx rules")
        }
    return(<div>
        <h1>hey ganesh</h1>
        <h2>how are you</h2>
        <h1> {a}</h1>
        <h1>{b}</h1>
        <button onClick={sample}>click me </button>

        </div>)
    }
   export default JsxRules