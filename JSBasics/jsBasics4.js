/********* String ******************/

let string = " Gau&rav "

console.log(string.length)          //length: get the length of the string
let subString = string.slice(0,4)   //slice: get the substring from main string
console.log(subString)
let splitString = string.split("&") //split: divide the string in two substring and stores in an Array
console.log(splitString)
console.log(splitString[0].length)
let trimmedString = splitString[0].trim()//trim: remove white spaces 
console.log(trimmedString)
console.log(splitString[1])

let date = "25"                     //parseInt: A string to convert into a number
let nextDate = "29"
let dateDiff = parseInt(nextDate) - parseInt(date)
console.log(dateDiff)
let dateString = dateDiff.toString()
console.log(dateString)

let concat = "Name is" + string     //used to add two strings
console.log(concat)