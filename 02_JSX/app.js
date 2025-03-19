//React Elements can also be created using the JSX
//JSX (Javascript XML) is a syntax for JavaScript, primarily used in [REACT], that allows you to write HTML-like structures directly within your JavaScript code, making it easier to create user interfaces
//This syntax is not understood by the JS that's why we need a compiler[BABEL] which can actually convert it into js understandable code.   [JSX]------{BABEL}------->[JS]
//It simplifies the process of creating React components by allowing you to write markup and logic in the same place, improving code readability and maintainability. 

// const heading = <h1>Hello, JSX!</h1>; //JSX
//OR
// const heading = React.createElement('h1', null, 'Hello, JSX!'); JSX is converted into this format

const heading = <h1 id="mainHeading">React Tutorial</h1>
const p = <p>I am learning React now</p>
const box = (
    <div className="box">
        {heading} {/*We can add Jsx expressions inside JSX using curly braces */}
        {p}
    </div>
)
ReactDOM.render(
    box,
    document.getElementById('container')
)