/************Inheritance ************/

const Person = require('./jsBasics6')

class Name extends Person {
      //you can create new properties in child class
      get location() {
            return "Akot"
      }
      //create constructor in child class or subclass
      constructor(firstName, lastName, date1, date2){
      //call the parent class constructor here using "Super keyword"
            super(firstName, lastName, date1, date2)
      }
}
let childClassObject = new Name("Surabhi", "Lanke", 20, 5)
console.log(childClassObject.location)
childClassObject.fullName()
childClassObject.sumDate()