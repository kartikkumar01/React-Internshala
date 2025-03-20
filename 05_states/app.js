//As props are uneditable , states are the info associated with a component that allows us to create dynamic and interactive components.

//Props are associated with Functional components
//States are associated with Class components

//HOW TO MAKE CLASS COMPONENT?
class Box extends React.Component //Inheriting the class
{ 
    //state is the object of our class
    state = { 
        color : "black"
    }

    changeColor(color){
        this.setState({color:color})
    }
    render(){
        return (
            <div className="box">
                <h1 className={this.state.color}>{this.props.language}...</h1>
                <p onClick={() => this.changeColor('red')}>I am learning {this.props.language}</p>
            </div>
        )
    }
}

//No changes while rendering
ReactDOM.render(
    <Box language="React"/>,
    document.getElementById('container')
)


//React has built in event handlers 