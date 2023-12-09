/************** Object in Javascript ******************/
//Object is collection of properties

let person = {
      firstName: "Gaurav",    //we can declare string, numbers and functions also as a property in an object
      middleName: "Vinod",
      lastName: "Lanke",
      age : 25,
      fullName: function(){
            console.log(this.firstName+this.middleName+this.lastName)   //concatination
      }
}

//to call the function in object you need to put "()" after function name as shown below
console.log(person.fullName())

console.log(person)           //to fetch all the properties of object

console.log(person.firstName) //to get a property from the object

console.log(person['middleName']) //to get a property from the object using array type

person.firstName = "Surabhi"      //to change the property
person.middleName = "Gaurav"        
console.log(person.firstName)       
console.log(person.middleName)

person.gender = "Female"          //to create a new property  in runtime
console.log(person)

delete person.gender              //to delete a property in Runtime
console.log(person)

console.log("gender" in person)   //to check property exists in object 
console.log('firstName' in person)

//to print all the values of properties in Javascript object 
for(let key in person){
      console.log(person[key])
}
