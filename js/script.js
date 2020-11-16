// Chiedere all’utente il cognome,
// inserirlo in un array con altri cognomi (Es: 'Pesce', ‘Castenetto’, 'Passaro', 'Grimaldi', ‘Rossi’, ‘Verdi’, ‘Bianchi’).
// Stampa la lista ordinata alfabeticamente.
// Scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova.

//chiedo all'utente il cognome
var cognomeUtente = prompt("Inserisci il tuo cognome");
//Trasformo la prrima lettera in maiuscola

while (!isNaN(cognomeUtente)) {
  alert("Puoi inserire solo una stringa");
  cognomeUtente = prompt("Inserisci il tuo cognome");
}

cognomeUtente = cognomeUtente[0].toUpperCase() + cognomeUtente.slice(1);

var cognomi = ['Pesce', 'Grimaldi', 'Passaro', 'Castenetto', 'Rossi', 'Verdi', 'Bianchi'];
//aggiungo il cognome all'array
cognomi.push(cognomeUtente);

var sorted = cognomi.sort();
console.log(cognomi);
//stampo la lista ordinata
console.log(sorted);

//stampo la posizione del cognome
for (var i = 0; i < sorted.length; i++) {
  if (sorted[i] == cognomeUtente){
    console.log("La posizione del cognome è: ", (i+1));
  }

}
