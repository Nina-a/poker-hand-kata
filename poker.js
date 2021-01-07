import { xor } from "lodash";
import { xit } from "mocha";

let black = ['2H', '3D', '5S', '9C', 'KD'];

let white = ['2C', '3H', '4S', '8C', 'AH'];

let order = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'K', 'A'];

function pokerResult(hand1, hand2) {
  // Remplir un tableau avec la première valeur de la carte
  let valeurcardhand1 = [];

  for ( var i = 0 ; i < hand1.length ; i++ ){
    let valeur = hand1[i].substr(0,1);
    valeurcardhand1.push(valeur);
  }
   
  let valeurcardhand2 = [];

  for ( var i = 0 ; i < hand2.length ; i++ ){
    let valeur = hand2[i].substr(0,1);
    valeurcardhand2.push(valeur);
  }

  // Remplir un second tableau (fonction map) pour déterminer l'ordre des cartes
  let ordrecard1 = parseInt(valeurcardhand1.map( x => order.indexOf(x)));
  let ordrecard2 = parseInt(valeurcardhand2.map( x => order.indexOf(x)));

  let maxcard1 = Math.max(ordrecard1);
  let maxcard2 = Math.max(ordrecard2);

  let result = maxcard1 > maxcard2 ?  '1':  '2';
  return result;
}
export { pokerResult };
