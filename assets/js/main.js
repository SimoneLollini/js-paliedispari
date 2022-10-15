// Chiedere all’utente di inserire una parola 
const userInput = prompt('Inserisci una parola');
// Creare una funzione per capire se la parola inserita è palindroma

checkPali(userInput); //do in pasto userInput alla funzione checkPali
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
        console.log('La parola inserita è palindroma');
    }
    else {
        // altrimenti stampo non è palindroma
        console.log('La parola inserita non è palindroma');
    }
}






