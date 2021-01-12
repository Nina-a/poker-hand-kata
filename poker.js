let order = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];

let orderCombinaison = ['single', 'pair', 'doublePair', 'brelan', 'suite', 'couleur', 'full', 'carre', 'quinteFlush', 'quinteFlushRoyale'];

function pokerResult(hand1, hand2) {
  // Remplir un tableau avec la valeur de la carte
  let { numberOfSameCard1, numberOfSameCard2, ordreCard1, ordreCard2, suite1, suite2, couleur1, couleur2 } = initialisation(hand1, hand2);

  // Il y a au moins une paire dans chaque main
  if (
    numberOfSameCard1.indexOf(2) !== -1 &&
    numberOfSameCard2.indexOf(2) !== -1
  ) {
    return auMoins1PairDansChaqueMain(numberOfSameCard1, numberOfSameCard2, ordreCard1, ordreCard2 );
    }

  //Il y a au moins une paire dans une main et des cartes simples dans l'autre
  else if (
    !(numberOfSameCard1.indexOf(2) == -1 && numberOfSameCard2.indexOf(2) == -1)
  ) {
    if (suite1 || suite2)
    {
    let result = suite1 ? '1':'2';
    return result;
    }
    else 
    {
    let result = numberOfSameCard1.indexOf(2) !== -1 ? '1' : '2';
    return result;
  }
  }
  // Il y a au moins un brelan dans chaque main
  else if (numberOfSameCard1.indexOf(3) !== -1 &&
  numberOfSameCard2.indexOf(3) !== -1) {
    var brelan1 = numberOfSameCard1.indexOf(3);
    var brelan2 = numberOfSameCard2.indexOf(3);

    var result = brelan1 > brelan2 ? '1' : '2';

    return result
  }
  // Il y a un brelan devant une double paire / paire / carte simple
  else if(
  !(numberOfSameCard1.indexOf(3) == -1 && numberOfSameCard2.indexOf(3) == -1)
  ) {
    if (suite1 || suite2)
    {
    let result = suite1 ? '1':'2';
    return result;
    }
    else 
    {
    let result = numberOfSameCard1.indexOf(3) !== -1 ? '1' : '2';
    return result;
  }
  }
  // Il n'y a que des cartes simples dans les mains
  else if (
    numberOfSameCard1.indexOf(2) == -1 &&
    numberOfSameCard1.indexOf(2) == -1
  ) {
    if (suite1 || suite2)
    {
    let result = suite1 ? '1':'2';
    return result;
    }
    else 
    {
      return simpleCarte(ordreCard1, ordreCard2);
  }
  }
}

function initialisation(hand1, hand2) {
  // Tableau donnant la valeur des cartes dans la main
  let valeurCardHand1 = [];
  for (var i = 0; i < hand1.length; i++) {
    let valeur = hand1[i].substr(0, 1);
    valeurCardHand1.push(valeur);
  }

  // Tableau donnant les couleurs des cartes
  let colorCardHand1 = new Map();
  for (var i = 0; i < hand1.length; i++) {
    let valeur = hand1[i].substr(1, 1);
    colorCardHand1.set(valeur, i);
  }
  let couleur1 = colorCardHand1.size == 1 ;

  // Tableau donnant la valeur des cartes dans la main
  let valeurCardHand2 = [];
  for (var i = 0; i < hand2.length; i++) {
    let valeur = hand2[i].substr(0, 1);
    valeurCardHand2.push(valeur);
  }

  // Tableau donnant les couleurs des cartes
  let colorCardHand2 = new Map();
  for (var i = 0; i < hand2.length; i++) {
    let valeur = hand2[i].substr(1, 1);
    colorCardHand2.set(valeur, i);
  }
  let couleur2 = colorCardHand2.size == 1 ;

  // tableau convertissant et ordonnant la valeur de la carte en ordre de la plus petite à la plus grande
  let ordreCard1 = valeurCardHand1.map((x) => order.indexOf(x));
  let ordreCard2 = valeurCardHand2.map((x) => order.indexOf(x));
  ordreCard1=ordreCard1.sort();
  ordreCard2=ordreCard2.sort();

  // Tableau permettant de connaitre le nombre de fois ou l'on la même carte
  let numberOfSameCard1 = [];
  for (var i = 0; i < ordreCard1.length; i++) {
    if (numberOfSameCard1[ordreCard1[i]]) {
      numberOfSameCard1[ordreCard1[i]] = numberOfSameCard1[ordreCard1[i]] + 1;
    } else {
      numberOfSameCard1[ordreCard1[i]] = 1;
    }
  }

  let numberOfSameCard2 = [];
  for (var i = 0; i < ordreCard2.length; i++) {
    if (numberOfSameCard2[ordreCard2[i]]) {
      numberOfSameCard2[ordreCard2[i]] = numberOfSameCard2[ordreCard2[i]] + 1;
    } else {
      numberOfSameCard2[ordreCard2[i]] = 1;
    }
  }
  
  // Permet de savoir si on a une suite ou non
  var suite1 = isSuite(numberOfSameCard1, ordreCard1);
  var suite2 = isSuite(numberOfSameCard2, ordreCard2);
  
  return { numberOfSameCard1, numberOfSameCard2, ordreCard1, ordreCard2, suite1, suite2, couleur1, couleur2 };
}

function isSuite(numberOfSameCard, ordreCard) {
  if (!((numberOfSameCard.indexOf(2) !== -1) && (numberOfSameCard.indexOf(3) !== -1))) {
    let valeurMin1 = ordreCard[0];
    var suite1 = false;
    if (valeurMin1 !== 0) {
      let valeurMax1 = ordreCard[4];
      suite1 = valeurMax1 == valeurMin1 + 4;
    }
  }
  return suite1;
}

function auMoins1PairDansChaqueMain(numberOfSameCard1, numberOfSameCard2, ordreCard1, ordreCard2 ) {
  var paire1 = [];
  var paire2 = [];

  // trouver la paire par main
  for (var valeur in numberOfSameCard1) {
    if (numberOfSameCard1[valeur] == 2) {
      paire1.push(valeur);
    }
  }
  let maxPaire1 = Math.max(...paire1);
  let nombreOfPaire1 = paire1.length;

  for (var valeur in numberOfSameCard2) {
    if (numberOfSameCard2[valeur] == 2) {
      paire2.push(valeur);
    }
  }
  let maxPaire2 = Math.max(...paire2);
  let nombreOfPaire2 = paire2.length;

  // Si le nombre de paire est le même
  if (nombreOfPaire1 == nombreOfPaire2) {
    // On regarde la paire la principale, Si c'est la même on regarde la seconde paire si y a une seconde paire
    // On regarde la plus grande carte sinon
    if (maxPaire1 == maxPaire2 && nombreOfPaire2 == 2) 
    {
      var result = paire1[0] > paire2[0] ? '1' : '2';
    } 
    else if (maxPaire1 == maxPaire2 && nombreOfPaire2 !== 2) 
    {
      let maxOrdreCard1 = Math.max(...ordreCard1);
      let maxOrdreCard2 = Math.max(...ordreCard2);
      let maxCard1 = maxOrdreCard1 == maxPaire1 ? ordreCard1[2] :maxOrdreCard1 ;
      let maxCard2 = maxOrdreCard2 == maxPaire2 ? ordreCard2[2] :maxOrdreCard2
      var result = maxCard1 > maxCard2 ? '1' : '2';
    }
    else
    {
      var result = maxPaire1 > maxPaire2 ? '1' : '2';
    }
  } else {
    var result = maxPaire1 > maxPaire2 ? '1' : '2';
  }
  return result;
}

function simpleCarte(ordreCard1, ordreCard2) {
  // faire un tableau (fonction map) pour déterminer l'ordre des cartes
  let maxcard1 = Math.max(...ordreCard1);
  let maxcard2 = Math.max(...ordreCard2);

  let result = maxcard1 > maxcard2 ? '1' : '2';
  return result;
}

export { pokerResult };