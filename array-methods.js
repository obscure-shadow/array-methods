
const fragment = document.createDocumentFragment()

const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]


/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/
const adddom = (param) =>  {
    
    const container = document.createElement("section")
    container.textContent= `this planet is ${param}`
    document.querySelector("#planets").appendChild(container)
}

planets.forEach((planet) => {
    // const container = document.createElement("section")
    // container.textContent= `this planet is ${planet}`
    // document.querySelector("#planets").appendChild(container)
adddom(planet)
})


/*
    Use the map method to create a new array where the
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/

const capplan = planets.map( (planet)  => { 
    return `${planet.charAt(0).toUpperCase()}${planet.slice(1)}`

})

capplan.forEach( (planet) =>
adddom(planet)

)

/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/

const eplanets = planets.filter( (planet) => {
    return planet.includes("e")
})

eplanets.forEach ( (planet) => adddom(planet) )

// Use the reduce method to create a sentence from the words in the following array
const words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"]

const reduction = words.reduce(() => words.join(' '))
console.log(reduction)
