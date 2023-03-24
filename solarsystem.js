export const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/

export const createPlanetList = () => {
    let string = '<h3>Planets</h3><ul>'
    planets.forEach(planet => {string += `<li>${planet}</li>`})
    string += '</ul>'
    return string
}

/*
    Use the map method to create a new array where the
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/

const capitalizedArray = planets.map(planet => {
    return planet.charAt(0).toUpperCase() + planet.substr(1).toLowerCase()

})

export const createCapPlanetList = () => {
    let string = '<h3>Capitalized Planets</h3><ul>'
    capitalizedArray.forEach(planet => {string += `<li>${planet}</li>`})
    string += '</ul>'
    return string
}

/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/

const planetsWithEs = planets.filter(planet => {
        return planet.includes("e")
})

export const createEPlanetsList = () => {
    let string = '<h3>Planets with an e</h3><ul>'
    planetsWithEs.forEach(planet => {string += `<li>${planet}</li>`})
    string += '</ul>'
    return string
}