//Array and Enums

enum LangaugeKnown{"English", "Hindi", "Marathi"};

let student = {
    Name: "Gaurav",
    Age: 20,
    Phone: 123456
}

let studentsList = [
    {Name: "Lanke", Age:25, Phone:1234567},
    {Name: "Surabhi", Age:22, Phone:1245474}
]

studentsList.push(student);

for (let index = 0; index < studentsList.length; index++) {
    let value = studentsList[index];
    console.log(value);  
}

//Functions and Function Declaration

//Parameter with Types
function GetStudentsList(students: any[]){
    students.forEach(element => {
        console.log(element.Name + "  " + element.Age)
    });
}
GetStudentsList(studentsList);

//Rest Parameters
function GetNumbers(...nums: number[]){
    nums.forEach(element => {
        console.log("Number: " + element)
    });
}
GetNumbers(1,2,3,4,5,6)

//Default Parameters
function GetInfo(info:String = "Happy"){
    console.log(info);
}
GetInfo();

//#################################### Functions Advanced ############################################
//Ananymous Function
let StudentName = function (fName: string, lName: string){
    return fName + "....." + lName;
}
console.log(StudentName("Gaurav", "Lanke"));

//Arrow Function
let StudentFullName = (fName: string, lName: string) => {return fName + "___" + lName;}
console.log(StudentFullName("Surabhi", "Palsodkar"));