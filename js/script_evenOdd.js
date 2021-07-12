/**
 * Pari e Dispari
 * L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
 * Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
 * Sommiamo i due numeri
 * Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
 * Dichiariamo chi ha vinto.
 */

//*? 1: inizializzo le variabili
var user = document.getElementById("even-odd");
var userNumber = document.getElementById("number");
var btn = document.getElementById("btn-play");
var result = document.getElementById("result");
var btnReset=document.getElementById("btn-reset");
var itemResult=document.getElementById("item-result");

btn.addEventListener("click", function () {
  
    validateNumber(parseInt(userNumber.value));
    var sum = 0;
    var msg = "";
    //*? 2: invoco la funzione random per in numero del computer
    var rand = randomNumber(1,5);
    console.log(rand);  
    //*? 3: sommiano i due numeri;
    sum = rand + parseInt(userNumber.value);
   
    //*? 4: test vincita
    if ((isEven(sum) && (user.value === "even")) || (!isEven(sum) && (user.value === "odd"))) {
        msg = "Hai vinto : la somma è " + sum;
        result.style.color="#ff4";
    } else {
        msg = "Hai perso : la somma è " + sum;
        result.style.color="#f00";
    }
    //? 5: Output text html
    itemResult.classList.remove("hidden");
    result.innerText=msg;
    btn.classList.add("disabled");
});

btnReset.addEventListener("click",function(){
    user.value="even";
    userNumber.value="1";
    itemResult.classList.add("hidden"); 
    console.clear();
    btn.classList.remove("disabled");
});
/** 
 * 
 * @param {number} num 
 * @returns  alert se non hai inserito un numero corretto
 */
 function validateNumber(num){
    while(isNaN(num) || (num<=0 || num>=6)){
        alert("hai inserito un numero non valido.")
        return;
     }
 }
/**
 * 
 * @param {number} num 
 * @returns {boolean} se è pari vero altrimenti falso
 */

function isEven(num) {
    return (num % 2 == 0 ? true : false);
}
/** ritorna un numero tra min and max
 * 
 * @returns {number} number from @param min to @param max;
 */
function randomNumber(min, max) {
    max++;
    return (Math.floor(Math.random() * (max - min)) + min);
}
 