//****************Array****************//

var arr = Array(6); /*Syntax 01 of Array: to tell the size of array but not the values in array*/
var arr = new Array(10,20,30,40,50,60) //to declare the values in array

var marks = [5,10,15,25]; //Syntax 02 of Array

console.log(marks)            //to print the entire array
console.log(marks[2], marks[3]); // to get the value with index in array
let index = marks.indexOf(15)  /*to get the index of the first occurence of a value in an array, 
                                 or -1 if it is not present.*/
console.log("Index of element 15: " + index)
console.log(marks.length)     //to get the size or length of array
marks[2] = 100;               //to change the value in array of any index
console.log(marks[2])
marks.push(35)               //to add the element to end of the array
console.log(marks)
console.log("Length of Array after pushing new element: " + marks.length)
marks.pop();                 //to remove or delete the last element of an array
console.log(marks)
marks.unshift(1)             //Inserts new elements at the start of an array
console.log(marks)
console.log(marks.includes(100)) /*Determines whether an array includes a certain element, 
                                    returning true or false as appropriate.*/
subArray = marks.slice(1,4)   /*to get section of a array or subarray from the array, 
                                    we have to give index of the section which we want*/
console.log(subArray)

//to print the element in array one by one using for loop
for(let i=0; i<marks.length; i++){
      console.log(marks[i]);
}

//**************"Reduce" fuction of an Array**************

//to sum all the elements presents in tha array using for loop
var sum = 0;
for(let i=0; i<marks.length; i++){
      sum = sum + marks[i]
}
console.log("Sum of all elements in Array: " + sum)

//to sum all the elements presents in an array using "Reduce" method of array
let totalMark = marks.reduce((sum, total)=>sum + total,0)
console.log('Sum of all elements in Array using Reduce fucntion: ' + totalMark)

//**************"Filter" fuction of an Array**************

//to fetch Even and Odd numbers from an array and create new seperate arrays for even and odd numbers using for loop
var array = [2,5,10,13,16,19]
var evenArray = []      //create a blank array to store even numnber
var oddArray = []      //create a blank array to store odd numnber
for(let i=0; i<array.length; i++){
      if(array[i] % 2 != 0){
            evenArray.push(array[i])
      }
      else if(array[i] % 2 == 0){
            oddArray.push(array[i])
      }
}
console.log(evenArray)
console.log(oddArray)

/*to fetch Even and Odd numbers from an array and create new seperate arrays for even and odd numbers 
using "Filter" method of array*/
//Code for Even Array
let filterEvenArray = array.filter(evenArray=>evenArray%2 == 0)
console.log(filterEvenArray)
//Code for Odd Array
let filterOddArray = array.filter(oddArray=>oddArray%2 != 0)
console.log(filterOddArray)

//**************"Map" fuction of an Array**************

//Map is used to perform actions on elements of array like multiplication, division
//Condition: if I want to multiply an array
let mappedArray = array.map(value=>value*2)
console.log(mappedArray)

/*Example: Create one array, filter the array with even numbers, sum elements of that array 
and multiply the elements with 2 */
var chainingArray = [1,2,3,4,5,6]
let even = chainingArray.filter(evenArr=>evenArr%2 == 0)
console.log(even)
let evenSum = even.reduce((sum,num)=>sum+num,0)
console.log(evenSum)
let mappedArr = even.map(element=>element*2)
console.log(mappedArr)
//Above condition fulfilled by "Method Chaining"
let finalResult = chainingArray.filter(even=>even%2 == 0).map(mapping=>mapping*2)
.reduce((sumUp,value)=>sumUp+value,0)
console.log("Final Result: " + finalResult)

/* ********************Sorting of an Array***************** */
           //String Array
 var stringArray = ["Apple", "Banana", "Pomegrate", "Orange", "Mango"]
//Sorting of String Array
console.log(stringArray.sort())
//Reversal of String Array
console.log(stringArray.reverse())

           //Number Array
let numArray = [2,5,3,8,11,15]
//Sorting of Number Array
numArray.sort(function(a,b){
      return a-b;
})
console.log(numArray)
//Or
console.log(numArray.sort((a,b)=>a-b))
//Reversal of Number Array
numArray.sort(function(a,b){
      return b-a;
})
console.log(numArray)
//Or
console.log(numArray.sort((a,b)=>b-a))
