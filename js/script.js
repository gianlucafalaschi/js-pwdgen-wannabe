/* Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito23 */

// AQUISIZIONE E PREPARAZIONE DATI
// ci servono:
// costante  

const lastPasswordPart = 23;
const lastPasswordPartAsNumber = parseInt(lastPasswordPart);
//nome utente
const userName = prompt("Qual'è il tuo nome?");
console.log(userName);
//cognome
const userCognome = prompt("Qual'è il tuo cognome? ");
console.log(userCognome);
//colore preferito
const userFavColor = prompt("Qual'è il tuo colore preferito?");
console.log(userFavColor);
// numero dato dall'utente
const userNumber = prompt("Dammi un numero");
const userNumberasNumber = parseInt(userNumber);
console.log(userNumberasNumber);
// LOGICA DELLA MIA APPLICAZIONE
//concateno nome + cognome + colore preferito + lastPasswordPart
/* const passw = userName + userCognome + userFavColor + lastPasswordPart;
console.log(passw); */

//uso backticks
const passw = `${userName}${userCognome}${userFavColor}${lastPasswordPartAsNumber + userNumberasNumber}`;

// metto la costante password in lowercase
const passwLow = passw.toLowerCase();
console.log(passwLow);

//OUTPUT ALL'UTENTE

/* const userMessage = "La tua password è: " + passw;
document.getElementById("messaggio").innerHTML = userMessage; */


//alternativa con backticks e andare a capo:
const userMessage = `La tua password è:
${passwLow}`;
document.getElementById("messaggio").innerHTML = userMessage;


