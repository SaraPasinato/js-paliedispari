/**
 * Pari e Dispari
 * L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
 * Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
 * Sommiamo i due numeri
 * Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
 * Dichiariamo chi ha vinto.
 */

//*? 1: inizializzo le variabili
var user=document.getElementById("even-odd");
var userNumber=document.getElementById("number");
// TODO validation user choice && userNumber

//*? 2: invoco la funzione random per in numero del computer
var rand= randomNumber();


function randomNumber(){
    return Math.floor(Math.random()*(6-1))+1;
}