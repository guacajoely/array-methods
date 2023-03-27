import { sales } from "./data.js";

//first off, how long is this array of sales...
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
const unsortedSalesByMonth = []
for(let i = 1; i < 13; i++){
    const arrayOfSingleMonthsSales = sales.filter(sale => {
        if(i<10){
        return sale.purchase_date.startsWith(`2017-0${i}`)
        }
        else{
            return sale.purchase_date.startsWith(`2017-${i}`)
            }
    })
    unsortedSalesByMonth.push(arrayOfSingleMonthsSales)
}

console.log(unsortedSalesByMonth)
const copyOfUnsortedSalesByMonth = [...unsortedSalesByMonth]

//sort the array of sales for each month by length
const monthlySalesByLength = copyOfUnsortedSalesByMonth.sort((a, b) => { return b.length - a.length})

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

//Lets go by email since some salespeople could have same first/last name
//grab just the email from each sale 
const arrayOfEmails = sales.map( sale => {
    return sale.sales_agent.email
})

// now count how many times that email pops up throughout the array and create a new array of the emails with counts
const emailsWithCounts = []
for(const email of arrayOfEmails){
    var count = 0;
    for(const anotherEmail of arrayOfEmails){
        if(email === anotherEmail){count++}
    }
    emailsWithCounts.push({email, count})
}

//we only need one count per email
const singleCounts = Object.values(emailsWithCounts.reduce((acc,{email,count})=>
   ((acc[email] = acc[email] || {email, count: 0}).count = count, acc), {}));

//now sort them most to fewest and spit out array[0]
const sortedByCount = singleCounts.sort((a, b) => { return b.count - a.count})
const emailWithMostSales = sortedByCount[0].email


//we got their email, now lets grab the whole object to get their name
const objectWithMostSales = sales.find((sale) => {
    return sale.sales_agent.email === emailWithMostSales
})

const firstNameSales = objectWithMostSales.sales_agent.first_name
const lastNameSales = objectWithMostSales.sales_agent.last_name

export const mostCarsSold = `<h3>3. Saleperson that sold the most cars = <span style="font-size: 25px">${firstNameSales} ${lastNameSales} (${emailWithMostSales})</span></h3>`





//4. Which salesperson made the most profit?
//This is going to look a lot like number 3, except instead of counting sales we need to total profit
// we already grabbed everyones email in 3 with arrayOfEmails so lets just use that here too, but we only need one of each email
const singleEmails = []
arrayOfEmails.forEach((x) => {
    if (!singleEmails.includes(x)) {
        singleEmails.push(x)
    }
})

//now we loop through sales and total the profit matching each email
const emailsWithProfits = []
for(const email of singleEmails){
    let totalProfit = 0;
    for(const sale of sales){
        if(email === sale.sales_agent.email){
            totalProfit += sale.gross_profit}
    }
    totalProfit = totalProfit.toFixed(2)
    emailsWithProfits.push({email, totalProfit})
}

//now we sort and return array[0] and find their name just like we did in the 3rd exercise
const sorted = emailsWithProfits.sort((a, b) => { return b.totalProfit - a.totalProfit})
const emailWithMostProfit = sorted[0].email

//we got their email, now lets grab the whole object to get their name
const objectWithMostProfit = sales.find((sale) => {
    return sale.sales_agent.email === emailWithMostProfit
})

const firstNameProfit = objectWithMostProfit.sales_agent.first_name
const lastNameProfit = objectWithMostProfit.sales_agent.last_name

export const personMostProfit = `<h3>4. Saleperson that made the most profit = <span style="font-size: 25px"> ${firstNameProfit} ${lastNameProfit} (${emailWithMostProfit}) </span></h3>`





//5. Which model was the most popular?
//first lets grab just the model from each sale
const arrayOfModels = sales.map( sale => {
    return sale.vehicle.model
})

// now count how many times that model pops up throughout the array and create a new array of the emails with counts
const modelsWithCounts = []
for(const model of arrayOfModels){
    var count = 0;
    for(const anotherModel of arrayOfModels){
        if(model === anotherModel){count++}
    }
    modelsWithCounts.push({model, count})
}

//we only need one count per model
const singleCountPerModel = Object.values(modelsWithCounts.reduce((acc,{model,count})=>
   ((acc[model] = acc[model] || {model, count: 0}).count = count, acc), {}));

//now sort them most to fewest and spit out array[0]
const modelsSortedByCount = singleCountPerModel.sort((a, b) => { return b.count - a.count})
const modelWithMostSales = modelsSortedByCount[0]

export const mostPopularModel = `<h3>5. Most popular car model sold = <span style="font-size: 25px"> ${modelWithMostSales.model} (${modelWithMostSales.count} sold)</span></h3>`





//6. Which bank provided the most loans to our customers?
//this is going to be very similar to the previous, (almost identical) but replace model with bank name on the "credit_provider" attribute under credit
//first lets grab just the bank name from each sale

const arrayOfBanks = sales.map( sale => {
    return sale.credit.credit_provider
})

// now count how many times that bank pops up throughout the array and create a new array of the banks with counts
const banksWithCounts = []
for(const bank of arrayOfBanks){
    var count = 0;
    for(const anotherBank of arrayOfBanks){
        if(bank === anotherBank){count++}
    }
    banksWithCounts.push({bank, count})
}

//we only need one count per bank
const singleCountPerBank = Object.values(banksWithCounts.reduce((acc,{bank,count})=>
   ((acc[bank] = acc[bank] || {bank, count: 0}).count = count, acc), {}));

//now sort them most to fewest and spit out array[0]
const banksSortedByCount = singleCountPerBank.sort((a, b) => { return b.count - a.count})
const bankWithMostSales = banksSortedByCount[0]

export const mostLoans = `<h3>6. Bank that provided the most loans = <span style="font-size: 25px"> ${bankWithMostSales.bank} (${bankWithMostSales.count} loans issued)</span></h3>`





//7. In which month did zero cars get sold?
// get all the sales that match each month into their own array
// January = salesByMonth[0]  February = salesByMonth[1]  etc...
const salesByMonth = []
for(let i = 1; i < 13; i++){
    const arrayOfSingleMonthsSales = []
    for(const sale of sales){
        const splitSaleDate = sale.purchase_date.split('-')
        if(i<10 && splitSaleDate[1] == `0${i}`){
            arrayOfSingleMonthsSales.push(sale) 
        }
        else if(i>10 && splitSaleDate[1] == `${i}`){
            arrayOfSingleMonthsSales.push(sale) 
        }
    }
    salesByMonth.push(arrayOfSingleMonthsSales)
}
console.log(salesByMonth)

//now get the name of the month with 0 sales
//grab the month number from the first array
let monthWithZeroSales = null
salesByMonth.forEach(month => {
    if(month.length === 0){
        const monthNumber = salesByMonth.indexOf(month) + 1
        monthWithZeroSales = monthNumber
    }
})

console.log(monthWithZeroSales)

//we can just use the funtion we used in exercise 2 to get the month name


export const zeroSales = `<h3>7. Month with zero sales = <span style="font-size: 25px"> ${getMonthName(monthWithZeroSales)} </span></h3>`