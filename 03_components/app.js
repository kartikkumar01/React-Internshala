//React Components are like functions that return HTML elements.
//Components come in two types, Class components and Function components
//We will talk about function components first

//The idea behind component is that we should see small element on page as a react component 
//A component should be very small and individual and have only one responsibility. 
//Then small componenets combine together to make larger components.
//And larger components creates the whole webpage
//Think of components as a puzzle pieces which combine together to make a complete puzzle


//HOW TO MAKE REACT COMPONENTS?
//-> Just return the react element through a function
//We use first letter capital for components.

function Heading(){
    return <h1 id="mainHeading">React Tutorial</h1>
}
function Para(){
    return <p className="para">I am learning React</p>
}
const Subheading = () => <h2>Lets learn it</h2> //component using arrow functions

function Box(){
    return (
        <div className="box">
            <Heading />
            <Subheading />
            <Para />
        </div>
    )
}
// --------------Using react component----------------
// Heading()   X
// <Heading /> ✔
//or React.createElement(Box, null) ✔

ReactDOM.render(
    <Box/>,
    document.getElementById('container')
)