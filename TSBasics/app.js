//Array and Enums
var LangaugeKnown;
(function (LangaugeKnown) {
    LangaugeKnown[LangaugeKnown["English"] = 0] = "English";
    LangaugeKnown[LangaugeKnown["Hindi"] = 1] = "Hindi";
    LangaugeKnown[LangaugeKnown["Marathi"] = 2] = "Marathi";
})(LangaugeKnown || (LangaugeKnown = {}));
;
var student = {
    Name: "Gaurav",
    Age: 20,
    Phone: 123456
};
var studentsList = [
    { Name: "Lanke", Age: 25, Phone: 1234567 },
    { Name: "Surabhi", Age: 22, Phone: 1245474 }
];
studentsList.push(student);
for (var index = 0; index < studentsList.length; index++) {
    var value = studentsList[index];
    console.log(value);
}
//Functions and Function Declaration
//Parameter with Types
function GetStudentsList(students) {
    students.forEach(function (element) {
        console.log(element.Name + "  " + element.Age);
    });
}
GetStudentsList(studentsList);
//Rest Parameters
function GetNumbers() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    nums.forEach(function (element) {
        console.log("Number: " + element);
    });
}
GetNumbers(1, 2, 3, 4, 5, 6);
//Default Parameters
function GetInfo(info) {
    if (info === void 0) { info = "Happy"; }
    console.log(info);
}
GetInfo();
//#################################### Functions Advanced ############################################
//Ananymous Function
var StudentName = function (fName, lName) {
    return fName + "....." + lName;
};
console.log(StudentName("Gaurav", "Lanke"));
//Arrow Function
var StudentFullName = function (fName, lName) { return fName + "___" + lName; };
console.log(StudentFullName("Surabhi", "Palsodkar"));
