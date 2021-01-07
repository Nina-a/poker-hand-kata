let black = ['2H', '3D', '5S', '9C', 'KD'];

let white = ['2C', '3H', '4S', '8C', 'AH'];

let order = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'K', 'A'];

function pokerResult(hand1, hand2) {
  // Remplir un tableau avec la première valeur de la carte
  let valeurcardhand1 =  hand1[0].substr(0,1);
  let valeurcardhand2 =  hand2[0].substr(0,1);

  // Remplir un second tableau (fonction map) pour déterminer l'ordre des cartes
  let ordrecard1 = order.indexOf(valeurcardhand1);
  let ordrecard2 = order.indexOf(valeurcardhand2);

  let result = ordrecard1 > ordrecard2 ?  '1':  '2';
  return result;
}
export { pokerResult };
