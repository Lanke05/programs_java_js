/*Class is created in jsBasics6.js file and the class properties, methods are called/accessed in this 
logic file using Export and Import logic with different parameters to an Object which created*/

const Person = require('./jsBasics6')

let classObject = new Person("Surabhi", "Palsodkar", 50, 50)
console.log(classObject.age)
console.log(classObject.city)
console.log(classObject.location)
classObject.fullName()
classObject.sumDate()
