import { customers } from "./data.js";

export const arrayOfEmailArrays = customers.map(customer => {
    return customer.contacts.email
})
const arrayOfEmails = arrayOfEmailArrays.flat(Infinity)

export const createSpamList = () => {
    let string = '<h3>Spam, Spam, Spam, Spam</h3><ul>'
    arrayOfEmails.forEach(email => {string += `<li>${email}</li>`})
    string += '</ul>'
    return string
}