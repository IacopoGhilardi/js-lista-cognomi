// Chiedere all’utente il cognome,
// inserirlo in un array con altri cognomi (Es: 'Pesce', ‘Castenetto’, 'Passaro', 'Grimaldi', ‘Rossi’, ‘Verdi’, ‘Bianchi’).
// Stampa la lista ordinata alfabeticamente.
// Scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova.

//chiedo all'utente il cognome
var cognomeUtente = prompt("Inserisci il tuo cognome");
//Trasformo la prrima lettera in maiuscola
cognomeUtente = cognomeUtente[0].toUpperCase() + cognomeUtente.slice(1);

var cognomi = ['Pesce', 'Grimaldi', 'Passaro', 'Castenetto', 'Rossi', 'Verdi', 'Bianchi'];
//aggiungo il cognome all'array
cognomi.push(cognomeUtente);

console.log(cognomi);
//stampo la lista ordinata
console.log(cognomi.sort());
