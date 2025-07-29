/*

Напишите программу, которая принимает целое положительное число n (одно любое число от 1 до 9), и выводит сумму равную 
n + nn + nnn, где n не перемножаются, а конкатенируются

*/
function multiplier( n){
let nn = Number(String(n) + n)
let nnn = Number(String(n) + n + n)
console.log(n + nn + nnn)
}
multiplier(5)