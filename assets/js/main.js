// Chiedere all’utente di inserire una parola 
const string = prompt('Enter a string: ');
// Creare una funzione per capire se la parola inserita è palindroma
// program to check if the string is palindrome or not


function checkPali(toCheck) {
    //creo un array che divida le lettere separatamente usando .split
    const arrayLettere = toCheck.split('');
    console.log(arrayLettere);
    // console.log(arrayLettere);
    // inverto l'ordine di arrayLettere usando .reverse
    const reverseArray = arrayLettere.reverse();
    console.log(reverseArray);
    // faccio diventare l'array invertita una stringa 
    const reverseToCheck = reverseArray.join('');
    // se la parola inserita è uguale alla stringa ottenuta invertendo la parola inserita stampo è palindoma 
    if (toCheck === reverseToCheck) {
        console.log('It is a palindrome');
    }
    else {
        // altrimenti stampo non è palindroma
        console.log('It is not a palindrome');
    }
}

checkPali(string);


