let value = true;
console.log(!value);  //to reverse the value of variable; it will apply to boolea type only

let a = 20;
let b = 10;
let assign = 'Gaurav'; //declared sting type to "let" varaible
console.log(assign);
assign = a+b; //now assigned the value to number type to "let" variable
console.log(assign);

const x = true;
if(!x){
      console.log('Condition is satisfied')
}
else{
      console.log(x)
      console.log('Condition not satisfied')
}

//condition: multiples of 2 and 5 with some conditions also
let n = 0;
for(let k=1; k<=100; k++){
      if(k%2 == 0 && k%5 == 0){
            n++
            console.log(k)
            if(n == 3){
            break;
            }
      }
}