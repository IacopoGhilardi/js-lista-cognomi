// Chiedere all’utente il cognome,
// inserirlo in un array con altri cognomi (Es: 'Pesce', ‘Castenetto’, 'Passaro', 'Grimaldi', ‘Rossi’, ‘Verdi’, ‘Bianchi’).
// Stampa la lista ordinata alfabeticamente.
// Scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova.

var cognomeUtente = prompt("Inserisci il tuo cognome");
cognomeUtente = cognomeUtente[0].toUpperCase() + cognomeUtente.slice(1);
var cognomi = ['Pesce', 'Grimaldi', 'Passaro', 'Castenetto', 'Rossi', 'Verdi', 'Bianchi'];
cognomi.push(cognomeUtente);


console.log(cognomi);
console.log(cognomi.sort());
// for (var i = 0; i < cognomi.length; i++) {
//
// }
