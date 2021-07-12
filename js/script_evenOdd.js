/**
 * Pari e Dispari
 * L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
 * Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
 * Sommiamo i due numeri
 * Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
 * Dichiariamo chi ha vinto.
 */

//*? 1: inizializzo le variabili

var btn = document.getElementById("btn-play");

// TODO validation user choice && userNumber

btn.addEventListener("click", function () {
    var user = document.getElementById("even-odd");
    var userNumber = document.getElementById("number");
    var sum = 0;
    var msg = "";
    //*? 2: invoco la funzione random per in numero del computer
    var rand = randomNumber();
    //*? 3: sommiano i due numeri;
    sum = rand + parseInt(userNumber.value);
    // console.log(userNumber.value);

    if ((isEven(sum) && (user.value === "even")) || (!isEven(sum) && (user.value === "odd"))) {
        msg = "Hai vinto : la somma è " + sum;
    } else {
        msg = "Hai perso : la somma è " + sum;
    }
    
    // console.log(msg);
    // console.log(rand);

});




function isEven(num) {
    return (num % 2 == 0 ? true : false);
}
/** ritorna un numero tra 1 e 5 incluso
 * 
 * @returns {number} number from 1 to 5;
 */
function randomNumber() {
    return (Math.floor(Math.random() * (6 - 1)) + 1);
}