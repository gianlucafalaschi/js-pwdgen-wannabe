/* Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito23 */

// AQUISIZIONE E PREPARAZIONE DATI
// ci servono:
// costante  
const lastPasswordPart = "23";
console.log(lastPasswordPart);
//nome utente
const userName = prompt("Qual'è il tuo nome?");
console.log(userName);
//cognome
const userCognome = prompt("Qual'è il tuo cognome? ");
console.log(userCognome);
//colore preferitoGia
const userFavColor = prompt("Qual'è il tuo colore preferito?");
console.log(userFavColor);
// LOGICA DELLA MIA APPLICAZIONE
//concateno nome + cognome + colore preferito + lastPasswordPart
/* const passw = userName + userCognome + userFavColor + lastPasswordPart;
console.log(passw); */

//uso backticks
const passw = `${userName}${userCognome}${userFavColor}${lastPasswordPart}`;

//OUTPUT ALL'UTENTE

const userMessage = "La tua password è: " + passw;
document.getElementById("messaggio").innerHTML = userMessage;