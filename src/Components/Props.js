 const PropsDemo =(props) =>{
    return(<div>
    <h1>EmpName:{props.Emp.EmpName}</h1>
    <h1>EmpMail:{props.Emp.EmpPhone}</h1>
    <h1>EmpMail:{props.Emp.EmpMail}</h1>
    </div>
    )
    }
export default PropsDemo


//another way of defining properties

export const PropsDemo2 = ({ name, mail, phone }) => {
    return (<div>
        <h1> Emp Name:{name}</h1>
        <h1> Emp Mail:{mail}</h1>
        <h1> Emp phone:{phone}</h1>
    </div>)
}


//and another way of defining properties

export const PropsDemo3 = (props) => {
    const { name, phone, mail } = props
    return (
        <div>
            <p> Emp Name:{name}</p>
            <p> Emp Mail:{mail}</p>
            <p> Emp phone:{phone}</p>
        </div>
    )

}




