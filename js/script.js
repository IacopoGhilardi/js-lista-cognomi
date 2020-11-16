// Chiedere all’utente il cognome,
// inserirlo in un array con altri cognomi (Es: 'Pesce', ‘Castenetto’, 'Passaro', 'Grimaldi', ‘Rossi’, ‘Verdi’, ‘Bianchi’).
// Stampa la lista ordinata alfabeticamente.
// Scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova.

//chiedo all'utente il cognome
var cognomeUtente = prompt("Inserisci il tuo cognome");


while (!isNaN(cognomeUtente)) {
  alert("Puoi inserire solo una stringa");
  cognomeUtente = prompt("Inserisci il tuo cognome");
}

var cognomi = ['Pesce', 'Grimaldi', 'Passaro', 'Castenetto', 'Rossi', 'Verdi', 'Bianchi'];
//aggiungo il cognome all'array trasformando la prima lettera
cognomeUtente = cognomeUtente.toLowerCase();
cognomeUtente = cognomeUtente[0].toUpperCase() + cognomeUtente.slice(1);
cognomi.push(cognomeUtente);

console.log(cognomi);
cognomi = cognomi.sort();
//stampo la lista ordinata
console.log(cognomi);

//stampo la posizione del cognome
for (var i = 0; i < cognomi.length; i++) {
  if (cognomi[i] == cognomeUtente) {
    console.log("La posizione del cognome è: ", (i+1));
  }
}
