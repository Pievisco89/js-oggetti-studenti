//creo oggetto studente 
var studente = {
  nome: 'Pietro',
  cognome: 'Visconti',
  eta: 31
};

//stampo a schermo le proprieta con ciclo for-in
for(var key in studente){
  console.log(studente[key]);
};
console.log('-----------------');

//creo un array di oggetti di studenti
var arrStudenti = [
  {
    nome: 'Pietro',
    cognome: 'Visconti',
    eta: 31
  },

  {
    nome: 'Aldo',
    cognome: 'Baglio',
    eta: 25
  },

  {
    nome: 'Giovanni',
    cognome: 'Storti',
    eta: 35
  },

  {
    nome: 'Giacomo',
    cognome: 'Poretti',
    eta: 22
  },
];

//uso ciclo for-of e stampo nome e cognome
console.log('Uso ciclo for-of');
for(var studente of arrStudenti){
  console.log('Nome: ' + studente.nome + ', Cognome: ' + studente.cognome + '.');
  console.log('-----------------');
}

//uso ciclo for-in e stampo nome e cognome
console.log('Uso ciclo for-in');

for(var key in arrStudenti){
  var student = arrStudenti[key];
  console.log('Nome: ' + student.nome + ', Cognome: ' + student.cognome + '.');
  console.log('-----------------');
}


//uso ciclo for e stampo nome e cognome
console.log('Uso ciclo for');

for(var i = 0; i < arrStudenti.length; i++){
  var student = arrStudenti[i];
  console.log('Nome: ' + student.nome + ', Cognome: ' + student.cognome + '.');
  console.log('-----------------');
}


//utente aggiunge un nuovo oggetto studente tramite 3 prompt()
var nomeUtente = prompt('Inserisci il tuo nome');
var cognomeUtente = prompt('Inserisci il tuo cognome');
var etaUtente = parseInt(prompt('Quanti anni hai?'));

arrStudenti.push(
  {
    nome: nomeUtente,
    cognome: cognomeUtente,
    eta: etaUtente
  }
);

console.log(arrStudenti);