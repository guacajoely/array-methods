import { businesses } from "./data.js"

export const bigSpendas = businesses.filter(business => {
    let matchingObjects = business.orders.some(order => {
        return order > 9000
    })
    return matchingObjects
}).map(business => business.companyName)

export const createBigSpendas = () => {
    return `
        <h3>Big Spendas</h3>
        <ul>
            ${ bigSpendas.map(companyName => {
                return `<li>${companyName}</li>`
            }).join("")
            }
        </ul>`
}