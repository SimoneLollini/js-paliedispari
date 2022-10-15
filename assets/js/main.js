// Palindroma

// Chiedere all’utente di inserire una parola 
const userInput = prompt('Inserisci una parola');
// Creare una funzione per capire se la parola inserita è palindroma

// checkPali(userInput); //do in pasto userInput alla funzione checkPali
// function checkPali(toCheck) {
//     //creo un array che divida le lettere separatamente usando .split
//     const arrayLettere = toCheck.split('');
//     console.log(arrayLettere);
//     // console.log(arrayLettere);
//     // inverto l'ordine di arrayLettere usando .reverse
//     const reverseArray = arrayLettere.reverse();
//     console.log(reverseArray);
//     // faccio diventare l'array invertita una stringa 
//     const reverseToCheck = reverseArray.join('');
//     // se la parola inserita è uguale alla stringa ottenuta invertendo la parola inserita stampo è palindoma 
//     if (toCheck === reverseToCheck) {
//         console.log('La parola inserita è palindroma');
//     }
//     else {
//         // altrimenti stampo non è palindroma
//         console.log('La parola inserita non è palindroma');
//     }
// }


// creo un array all'interno della funzione utilizzando Array.from
checkPali(userInput)
function checkPali(toCheck) {
    const arrayLettere = Array.from(toCheck)
    // console.log(arrayLettere);   
    let word;
    for (let i = 0; i < arrayLettere.length; i++) {
        word = arrayLettere[i];
        // console.log(word);
    }
    let wordReverse;
    for (let i = arrayLettere.length - 1; i > -1; i--) {
        wordReverse = arrayLettere[i];
        // console.log(wordReverse);
    }

    if (word === wordReverse) {
        console.log("La parola inserita è palindroma");
    } else {
        console.log("La parola inserita non è palindroma");
    }
}



//Pari e dispari

// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. 
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri 
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.












