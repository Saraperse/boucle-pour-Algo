var readline = require("readline-sync");
var a = readline.question("saisissez un nombre ");
var n = readline.question("saisissez une puissance ");



var resultat = 1;

// for (var i = 1; i<= n; i++){
//     resultat = resultat*a
//     console.log(resultat);
// }

resultat = pow(a,n);
console.log(resultat);