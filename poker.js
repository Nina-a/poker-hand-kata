import { forIn } from "lodash";

let black = ['2H', '3D', '5S', '9C', 'KD'];

let white = ['2C', '3H', '4S', '8C', 'AH'];

let order = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'K', 'A'];

function pokerResult(hand1, hand2) {
  // Remplir un tableau avec la valeur de la carte
  let valeurCardHand1 = [];
  for ( var i = 0 ; i < hand1.length ; i++ ){
    let valeur = hand1[i].substr(0,1);
    valeurCardHand1.push(valeur);
  }
  
  let valeurCardHand2 = [];
  for ( var i = 0 ; i < hand2.length ; i++ ){
    let valeur = hand2[i].substr(0,1);
    valeurCardHand2.push(valeur);
  }
  // Tableau permettant de connaitre le nombre de fois ou l'on la même carte
  let numberOfSameCard1 = [];
  for ( var i = 0 ; i < valeurCardHand1.length ; i++ ){
    if (numberOfSameCard1[valeurCardHand1[i]] )
    { numberOfSameCard1[valeurCardHand1[i]] = numberOfSameCard1[valeurCardHand1[i]] + 1 ; } 
    else { numberOfSameCard1[valeurCardHand1[i]] = 1 ; } 
  }
  let numberOfSameCard2 = [];
  for ( var i = 0 ; i < valeurCardHand2.length ; i++ ){
    if (numberOfSameCard2[valeurCardHand2[i]] )
    { numberOfSameCard2[valeurCardHand2[i]] = numberOfSameCard2[valeurCardHand2[i]] + 1 ; } 
    else { numberOfSameCard2[valeurCardHand2[i]] = 1 ; } 
  }

  // Il n'y a que des cartes simples dans les mains
  if ( numberOfSameCard1.indexOf(2) == -1 & numberOfSameCard1.indexOf(2) == -1 )
  {
    // faire un tableau (fonction map) pour déterminer l'ordre des cartes
    let ordreCard1 = parseInt(valeurCardHand1.map( x => order.indexOf(x)));
    let ordreCard2 = parseInt(valeurCardHand2.map( x => order.indexOf(x)));
    // Trouve la carte la plus grande
    let maxcard1 = Math.max(ordreCard1);
    let maxcard2 = Math.max(ordreCard2);

    let result = maxcard1 > maxcard2 ?  '1':  '2';
    return result;
  }
  // Il y a au moins une paire dans chaque main
  else if ( numberOfSameCard1.indexOf(2) !== -1 & numberOfSameCard1.indexOf(2) !== -1)
  {
    // trouver la paire par main
  for ( var valeur in numberOfSameCard1){
    if (numberOfSameCard1[valeur] == 2){
      var Paire1 = 0;
      valeur > Paire1 ? Paire1 = valeur : Paire1 = Paire1;
    }
  }
  for ( var valeur in numberOfSameCard2){
    if (numberOfSameCard2[valeur] == 2){
      var Paire2 = 0;
      valeur > Paire2 ? Paire2 = valeur : Paire = Paire2;
    }
  }
  let result = Paire1 > Paire2 ?  '1':  '2';
  return result;
} 

}
export { pokerResult };
