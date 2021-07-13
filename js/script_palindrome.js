/**
 * Palidroma
 * Chiedere all’utente di inserire una parola
 * Creare una funzione per capire se la parola inserita è palindroma
 */

//? 1: inizializzo le variabili è chiedo all'utente una parola
var userChoice = prompt("inserisci una stringa palindroma: ", "Ai lati d Italia").toLowerCase().trim();
var pal = document.getElementById("text-palindrome");
//? 2: scrive il messaggio al test di funzione 
var msg = "E' palindroma";
//? 3: validazione per stringa vuoto o undefined o inNaN 
while (!userChoice || userChoice === " ") {
    alert("inserisci una parola");
    userChoice = prompt("inserisci una stringa palindroma: ", "Ai lati d Italia").toLowerCase();
}
//?4: invoco la funzione e stampo messaggio --- check funzione  palindrome di userChoice 
if (!checkPhrasePalindrome(userChoice)) {
    msg = "Non è palindroma";
}
// ?4: output in html text 
pal.innerText = msg;


/** controlla se la parola sia palindroma 
 * 
 * @param {string} words 
 * @returns {boolean} isPal
 */
function checkPalindrome(words) {

    // cerco la lunghezza della stringa
    var len = words.length;
    var isPal = true;
    // ciclo fino a metà
    for (var i = 0; i < len / 2; i++) {
        // test se la prima o l'ultima stringa sono le stesse
        if (words[i] !== words[len - 1 - i]) {
            isPal = false;
        }
    }
    return isPal;
}
// ! BONUS: frase palindroma
/** controlla non solo se è palindroma ma 
 * elimina anche gli spazi in una frase 
 * 
 * @param {string} str 
 * @returns {boolean} if palindrome
 */
function checkPhrasePalindrome(str) {
    var arr = str.split(" ");
    console.table(arr);
    var strMarge = "";
    for (var i = 0; i < arr.length; i++) {
        strMarge += arr[i];
    }
    return checkPalindrome(strMarge);
}