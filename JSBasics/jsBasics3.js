/* Differences between Var, Let and Const in terms of Scope, Assignment and Declaration */

var shoes = "Wildcraft"
let greet = "Morning"
const season = "Winter"
shoes = "Puma"
greet = "Night"

if(1 == 1){
      var shoes = "Fila"
      let greet = "Afternoon"
      const season = "Summer"
}

function check(){
      var shoes = "Adidas"
      let greet = "Evening"
      const season = "Rain"
}
check();

console.log(shoes)
console.log(greet)
console.log(season)