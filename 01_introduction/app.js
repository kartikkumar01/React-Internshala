//React was created by Jordan Walke in 2011.
//React is used to create COMPLEX user interfaces with minimum efforts.
//React is a JS library which means it contains some predefined functions
//React websites are also called React Apps, so we name the js file as app.js

//How to use react?
//-->Add react and react-dom libraries

//CREATING HTML ELEMENT USING REACT LIKE WE DO IN JS
//React library contains createElement() which is used to create the element
//ReactDOM library contains render() which renders the element on the webpage

//NOTE : Library name is to be used before accessing the function. Ex - React.createElement()


//createElement() is used to create a React Element / Js Object
const heading = React.createElement(
    'h1', //element to be created
    {id : 'mainHeading'}, //element attributes
    'This is React tutorial' //content inside the element
) 

// console.log(heading) -> cannot access like this it returns object not element

//render() is used to render and display React Element on the webpage. It replaces the existing content
// ReactDOM.render(
//     heading, //Element to render
//     document.getElementById('container') //Element is rendered inside this dom element
// )

//We can render only one element inside the container
//If we want to add more than one element , then first put all the elements in the newly created container and then put that container in the react container

const p = React.createElement(
    'p',
    null,
    'I am learning react and will go slowly-slowly.'
)

const box = React.createElement(
    'div',
    {className : 'box'}, //we can not use class keyword because it is reserved , so we use className which will eventually be rendered as class
    heading, //here we can add many elements while creating element but only one while rendering
    p
)

ReactDOM.render(
    box,
    document.getElementById('container')
)