
/*********   CODE CHALLENGE 01 **********/
 
/*
Geben Sie über eine Prompt-Anforderung eine Zahl ein.
Geben Sie über eine Prompt-Anforderung eine zweite Zahl ein.
Berechnen Sie die Summe der Zahlen.
Geben Sie die Summe der Zahlen in die Konsole aus:
"Die Summe der Zahlen ist: summe"
*/
console.log("Adds two numbers: ");

// Fordert zwei Zahlen an
let number1 = prompt("Enter the first number: ");
let number2 = prompt("Enter the second number: ");

// Addiert die beiden Zahlen
// Wandelt den string mittels 'Number()' in number um.
// Auch parseInt() oder parseFloat() möglich, wenn der Input klar ist.
let sum = Number(number1) + Number(number2);

// Ausgabe
console.log("The sum of both numbers is: " + sum);

