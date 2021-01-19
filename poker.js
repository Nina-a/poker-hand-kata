let order = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];

let orderCombinaison = [
  'single',
  'pair',
  'doublePair',
  'brelan',
  'suite',
  'couleur',
  'full',
  'carre',
  'quinteFlush',
  'quinteFlushRoyale',
];

function pokerResult(hand1, hand2) {
  // Remplir un tableau avec la valeur de la carte
  let {
    numberOfSameCard1,
    numberOfSameCard2,
    ordreCard1,
    ordreCard2,
    suite1,
    suite2,
    couleur1,
    couleur2,
    carre1,
    carre2,
    brelan1,
    brelan2,
    full1,
    full2,
  } = initialisation(hand1, hand2);

  // Il y a au carré un full dans chaque main
  if (carre1 && carre2) {
    var hauteurCarre1 = numberOfSameCard1.indexOf(4);
    var hauteurCarre2 = numberOfSameCard2.indexOf(4);

    var result = hauteurCarre1 > hauteurCarre2 ? '1' : '2';

    return result;
  }

  // Il y a au moins un carre dans une main
  else if (carre1 || carre2)
    if (full1 || full2) {
      // Il y a une couleur dans l'autre main => carre gagne
      let result = carre1 ? '3' : '2';
      return result;
    }
    // il y a une quinte flush => la quinte gagne
    else if ((couleur1 && suite1) || (couleur2 && suite2)) {
      let result = couleur1 && suite1 ? '1' : '2';
      return result;
    }
    // Il y a une couleur dans l'autre main => carre gagne
    else if (couleur1 || couleur2) {
      let result = carre1 ? '1' : '2';
      return result;
    }
    // Il y a une suite dans l'autre main => carre gagne
    else if (suite1 || suite2) {
      let result = carre1 ? '1' : '2';
      return result;
      // Il y a un brelan dans l'autre main => carre gagne
    } else if (brelan1 || brelan2) {
      let result = carre1 ? '1' : '2';
      return result;
    }

    // Le carre gagne sur les autres combinaisons
    else {
      let result = numberOfSameCard1.indexOf(4) !== -1 ? '1' : '2';
      return result;
    }

  // Il y a au moins un full dans la main
  if (full1 && full2) {
    var hauteurFull1 = numberOfSameCard1.indexOf(3);
    var hauteurFull2 = numberOfSameCard2.indexOf(3);

    var result = hauteurFull1 > hauteurFull2 ? '1' : '2';

    return result;
  }

  // Il y a au moins un full dans une main
  else if (full1 || full2) {
    // Il y a une quinte  flush => la quinte flush gagne
    if ((couleur1 && suite1) || (couleur2 && suite2)) {
      let result = couleur1 && suite1 ? '1' : '2';
      return result;
    }
    // Il y a une couleur dans l'autre main => full gagne
    else if (couleur1 || couleur2) {
      let result = full1 ? '1' : '2';
      return result;
      // Il y a une suite dans l'autre main => full gagne
    } else if (suite1 || suite2) {
      let result = full1 ? '1' : '2';
      return result;
      // Il y a un brelan dans l'autre main => full gagne
    } else if (brelan1 || brelan2) {
      let result = full1 ? '1' : '2';
      return result;
      // Le brelan gagne sur les autres combinaisons
    } else {
      let result = numberOfSameCard1.indexOf(3) !== -1 ? '1' : '2';
      return result;
    }
  }

  // Il y a au moins un brelan dans chaque main
  if (brelan1 && brelan2) {
    var hauteurBrelan1 = numberOfSameCard1.indexOf(3);
    var hauteurBrelan2 = numberOfSameCard2.indexOf(3);

    var result = hauteurBrelan1 > hauteurBrelan2 ? '1' : '2';

    return result;
  }

  // Il y a un brelan dans une main
  else if (brelan1 || brelan2) {
    // Il y a une couleur dans l'autre main => Couleur gagne
    if (couleur1 || couleur2) {
      let result = couleur1 ? '1' : '2';
      return result;
      // Il y a une suite dans l'autre main => Suite gagne
    } else if (suite1 || suite2) {
      let result = suite1 ? '1' : '2';
      return result;
      // Le brelan gagne sur les autres combinaisons
    } else {
      let result = numberOfSameCard1.indexOf(3) !== -1 ? '1' : '2';
      return result;
    }
  }
  // Il y a au moins une paire dans chaque main
  else if (
    numberOfSameCard1.indexOf(2) !== -1 &&
    numberOfSameCard2.indexOf(2) !== -1
  ) {
    return auMoins1PairDansChaqueMain(
      numberOfSameCard1,
      numberOfSameCard2,
      ordreCard1,
      ordreCard2
    );
  }

  //Il y a au moins une paire dans une main et des cartes simples dans l'autre
  else if (
    !(numberOfSameCard1.indexOf(2) == -1 && numberOfSameCard2.indexOf(2) == -1)
  ) {
    if (couleur1 || couleur2) {
      let result = couleur1 ? '1' : '2';
      return result;
    }
    // Si y a au moins une suite
    else if (suite1 || suite2) {
      let result = suite1 ? '1' : '2';
      return result;
    } else {
      let result = numberOfSameCard1.indexOf(2) !== -1 ? '1' : '2';
      return result;
    }
  }

  // Il n'y a que des cartes simples dans les mains
  else if (
    numberOfSameCard1.indexOf(2) == -1 &&
    numberOfSameCard2.indexOf(2) == -1
  ) {
    if ((couleur1 && suite1) & (couleur2 && suite2)) {
      return simpleCarte(ordreCard1, ordreCard2);
    } else if ((couleur1 && suite1) || (couleur2 && suite2)) {
      let result = couleur1 && suite1 ? '1' : '2';
      return result;
    } else if (couleur1 && couleur2) {
      return simpleCarte(ordreCard1, ordreCard2);
    } else if (couleur1 || couleur2) {
      let result = couleur1 ? '1' : '2';
      return result;
    } else if (suite1 && suite2) {
      return simpleCarte(ordreCard1, ordreCard2);
    } else if (suite1 || suite2) {
      let result = suite1 ? '1' : '2';
      return result;
    } else {
      return simpleCarte(ordreCard1, ordreCard2);
    }
  }
}

function initialisation(hand1, hand2) {
  // Tableau donnant la valeur des cartes dans la main
  var ordreCard1 = valeurCardHand(hand1);
  var ordreCard2 = valeurCardHand(hand2);

  // Tableau donnant les couleurs des cartes
  var couleur1 = colorHand(hand1);
  var couleur2 = colorHand(hand2);

  // Tableau permettant de connaitre le nombre de fois ou l'on la même carte
  var numberOfSameCard1 = sameCards(ordreCard1);
  var numberOfSameCard2 = sameCards(ordreCard2);

  // Retourne si ou ou non il ya telle ou telle main
  var { carre: carre1, full: full1, brelan: brelan1 } = nameHand(
    numberOfSameCard1
  );
  var { carre: carre2, full: full2, brelan: brelan2 } = nameHand(
    numberOfSameCard2
  );

  // Permet de savoir si on a une suite ou non
  var suite1 = isSuite(numberOfSameCard1, ordreCard1);
  var suite2 = isSuite(numberOfSameCard2, ordreCard2);

  return {
    numberOfSameCard1,
    numberOfSameCard2,
    ordreCard1,
    ordreCard2,
    suite1,
    suite2,
    couleur1,
    couleur2,
    carre1,
    carre2,
    full1,
    full2,
    brelan1,
    brelan2,
  };
}
function sameCards(ordreCard) {
  let numberOfSameCard = [];
  for (var i = 0; i < ordreCard.length; i++) {
    if (numberOfSameCard[ordreCard[i]]) {
      numberOfSameCard[ordreCard[i]] = numberOfSameCard[ordreCard[i]] + 1;
    } else {
      numberOfSameCard[ordreCard[i]] = 1;
    }
  }
  return numberOfSameCard;
}

function colorHand(hand) {
  let colorCardHand = new Map();
  for (var i = 0; i < hand.length; i++) {
    let valeur = hand[i].substr(1, 1);
    colorCardHand.set(valeur, i);
  }
  let couleur = colorCardHand.size == 1;
  return  couleur ;
}
function compareNombres(a, b) {
  return a - b;
}

function valeurCardHand(hand) {
  let valeurCardHand = [];
  for (var i = 0; i < hand.length; i++) {
    let valeur = hand[i].substr(0, 1);
    valeurCardHand.push(valeur);
  }
  let ordreCard = valeurCardHand.map((x) => order.indexOf(x));
  ordreCard = ordreCard.sort(compareNombres);
  return ordreCard ;
}

function nameHand(numberOfSameCard) {
  var carre = false;
  var full = false;
  var brelan = false;

  if (numberOfSameCard.indexOf(4) !== -1) {
    carre = true;
  } else if (
    numberOfSameCard.indexOf(2) !== -1 &&
    numberOfSameCard.indexOf(3) !== -1
  ) {
    full = true;
  } else if (numberOfSameCard.indexOf(3) !== -1) {
    brelan = true;
  }
  return { carre, full, brelan };
}

// Fonction permettant de savoir si les mains sont des suites ou
function isSuite(numberOfSameCard, ordreCard) {
  var suite = false;
  if (
    !(numberOfSameCard.indexOf(2) !== -1 && numberOfSameCard.indexOf(3) !== -1)
  ) {
    let valeurMin1 = ordreCard[0];
    if (valeurMin1 !== 0) {
      let valeurMax1 = ordreCard[4];
      suite = valeurMax1 == valeurMin1 + 4;
    }
  }
  return suite;
}

function auMoins1PairDansChaqueMain(
  numberOfSameCard1,
  numberOfSameCard2,
  ordreCard1,
  ordreCard2
) {
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
    if (maxPaire1 == maxPaire2 && nombreOfPaire2 == 2) {
      var result = paire1[0] > paire2[0] ? '1' : '2';
    } else if (maxPaire1 == maxPaire2 && nombreOfPaire2 !== 2) {
      let maxOrdreCard1 = Math.max(...ordreCard1);
      let maxOrdreCard2 = Math.max(...ordreCard2);
      let maxCard1 = maxOrdreCard1 == maxPaire1 ? ordreCard1[2] : maxOrdreCard1;
      let maxCard2 = maxOrdreCard2 == maxPaire2 ? ordreCard2[2] : maxOrdreCard2;
      var result = maxCard1 > maxCard2 ? '1' : '2';
    } else {
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
