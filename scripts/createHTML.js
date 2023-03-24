import { createBigSpendas } from "./bigspenders.js"
import { monthMostSales, mostCarsSold, mostLoans, mostPopularModel, personMostProfit, profit, zeroSales } from "./carDealership.js"
import { chainedMethods } from "./chainedMethods.js"
import { createCapPlanetList, createEPlanetsList, createPlanetList } from "./solarsystem.js"
import { createSpamList } from "./spam.js"

export const createHTML = () => {
    
    return `<section id="container">
                <h1>Car Dealership</h1>
                <div id="dealership">
                ${profit + monthMostSales + mostCarsSold + personMostProfit + mostPopularModel + mostLoans + zeroSales}
                </div>
            </section>
            <div id="chained-methods">
                <h3>Output from line 2 of chainedMethods.js = <span style="font-size: 25px">${chainedMethods}</span></h3>
            </div>

            <div id="big-spendas">
                ${createBigSpendas()}
            </div>
            <div id="planets">
                ${createPlanetList() + createCapPlanetList() + createEPlanetsList()}
            </div>
            <div id="spam">
                ${createSpamList()}
            </div>`
}