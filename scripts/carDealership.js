import { sales } from "./data.js";

//first off, how long is this freaking array...
console.log(sales.length)

//1. Total profit for 2017
//first grab only the objects that have a 2017 purchaseDate
const arrayOfMatchedYear = sales.filter(sale => {
    return sale.purchase_date.startsWith('2017')
})

//now grab only profit off of them and store in new array
const arrayOfProfits = arrayOfMatchedYear.map( sale => {
    return sale.gross_profit
})

//now total them all together with reduce
const totalProfit = arrayOfProfits.reduce((a, b) => {return a + b}).toFixed(2)

export const profit = `<h3>1. Total profit for 2017 = $<span style="font-size: 25px">${totalProfit}</span></h3>`

//2. In which month did they sell the most cars?
//filter array by month to get all sales from each month organized
// January = sales[0]  February = sales[1]  etc...
const arrayOfAllSalesByMonth = []
for(let i = 1; i < 13; i++){
    const arrayOfSingleMonthsSales = sales.filter(sale => {
        return sale.purchase_date.startsWith(`2017-0${i}`)
    })
    arrayOfAllSalesByMonth.push(arrayOfSingleMonthsSales)
}

//sort the array of sales for each month by length
const monthlySalesByLength = arrayOfAllSalesByMonth.sort((a, b) => { return b.length - a.length})

//grab the month number from the first array
const [,highestSalesMonth] = monthlySalesByLength[0][0].purchase_date.split('-')

//convert number to month name
function getMonthName(monthNumber) {
    const date = new Date();
    date.setMonth(monthNumber - 1);
    return date.toLocaleString('en-US', { month: 'long' });
  }

  export const monthMostSales = `<h3>2. Month with the highest sales = <span style="font-size: 25px">${getMonthName(highestSalesMonth)}</span></h3>`


//3. Which salesperson sold the most cars?
export const mostCarsSold = `<h3>3. Saleperson that sold the most cars = <span style="font-size: 25px"> INSERT RESULT HERE </span></h3>`


//4. Which salesperson made the most profit?
export const personMostProfit = `<h3>4. Saleperson that made the most profit = <span style="font-size: 25px"> INSERT RESULT HERE </span></h3>`

//5. Which model was the most popular?
export const mostPopularModel = `<h3>5. Most popular car model sold = <span style="font-size: 25px"> INSERT RESULT HERE </span></h3>`

//6. Which bank provided the most loans to our customers?
export const mostLoans = `<h3>6. Bank that provided the most loans = <span style="font-size: 25px"> INSERT RESULT HERE </span></h3>`

//7. In which month did zero cars get sold?
export const zeroSales = `<h3>7. Month with zero sales = <span style="font-size: 25px"> INSERT RESULT HERE </span></h3>`