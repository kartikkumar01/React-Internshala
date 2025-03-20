//Props are the properties of the component that can be passed while using the component.
//Once the properties are passed, these cannot be overwritten.
//props is a js object

//lets create a component
function Box(props){
    //props.language = "python"   //X properties are Read only, not editable
    return (
        <div className="box">
            <h1>{props.language}...</h1>
            <p>I am learning {props.language}</p>
        </div>
    )
}


ReactDOM.render(
    <Box language="React"/>,
    document.getElementById('container')
)
