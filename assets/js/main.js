// // Palindroma

// // Chiedere all’utente di inserire una parola 

// // Creare una funzione per capire se la parola inserita è palindroma

// // checkPali(userInput); //do in pasto userInput alla funzione checkPali
// // function checkPali(toCheck) {
// //     //creo un array che divida le lettere separatamente usando .split
// //     const arrayLettere = toCheck.split('');
// //     console.log(arrayLettere);
// //     // console.log(arrayLettere);
// //     // inverto l'ordine di arrayLettere usando .reverse
// //     const reverseArray = arrayLettere.reverse();
// //     console.log(reverseArray);
// //     // faccio diventare l'array invertita una stringa 
// //     const reverseToCheck = reverseArray.join('');
// //     // se la parola inserita è uguale alla stringa ottenuta invertendo la parola inserita stampo è palindoma 
// //     if (toCheck === reverseToCheck) {
// //         console.log('La parola inserita è palindroma');
// //     }
// //     else {
// //         // altrimenti stampo non è palindroma
// //         console.log('La parola inserita non è palindroma');
// //     }
// // }

// document.querySelector('.check_pali > button').addEventListener('click', checkPali)
// // creo un array all'interno della funzione utilizzando Array.from

// function checkPali() {
//     const userInput = prompt('Inserisci una parola');
//     const arrayLettere = Array.from(userInput)
//     // console.log(arrayLettere);   
//     let word;
//     for (let i = 0; i < arrayLettere.length; i++) {
//         word = arrayLettere[i];
//         // console.log(word);
//     }
//     let wordReverse;
//     for (let i = arrayLettere.length - 1; i > -1; i--) {
//         wordReverse = arrayLettere[i];
//         // console.log(wordReverse);
//     }

//     if (word === wordReverse) {
//         console.log("La parola inserita è palindroma");
//     } else {
//         console.log("La parola inserita non è palindroma");
//     }
// }






//Pari e dispari


document.querySelector('.pari_dispari > button').addEventListener('click', play)

function play() {
    prompt("Scegli tra pari (p) o dispari (d)")
    const userNumber = prompt("Scegli numero da 1 a 5")
    // console.log(userNumber);
    sum(userNumber, computerNumber())
}
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.

function computerNumber() {
    return Math.ceil(Math.random() * 5);
}
//console.log(computerNumber());


function sum(n1, n2) {
    if ((n1 + n2) % 2 === 0) {
        console.log("Vince pari");
    } else {
        console.log("Vince dispari");
    }
}

// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri 
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.












