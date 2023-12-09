/************ Classes in Javascript ************/
module.exports = class Person {
      age = 30                //Properties defined directly
      city = "Bangalore"
      get location(){        //Properties defined by "Getter method" using the keyword Get 
            return "Pune"
      }
      //constructor is a method which executes bydefault when you create object of a class
      constructor(firstName, lastName, date1, date2){
            this.firstName = firstName      
            this.lastName = lastName
            this.date1 = date1
            this.date2 = date2
      /*Instance variable or instance properties: the values are depends on the object creation*/
      /*this keyword used for to give access of constructor arguments throughout the class otherwise 
      it will limited to constructor scope only*/
      }
      //methods in class
      fullName(){
            console.log(this.firstName + " " + this.lastName)
      }

      sumDate(){
            console.log("Sum of Dates: " + (this.date1 + this.date2))
      }
}

// let person = new Person("Gaurav", "Lanke", 50, 20)  
// /*create object of a class to access the properties in a class
// constructor is created in class, we have to give parameters if constructor have arguments when we create 
// object of class and then other methods can be accessible */
// console.log(person.age)
// console.log(person.location)
// person.fullName()                //to access/call the method of a class
// person.sumDate()