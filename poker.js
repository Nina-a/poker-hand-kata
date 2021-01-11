let order = ['2', '3', '4', '5', '6', '7', '8', '9', 'T','J','Q','K','A'];

function pokerResult(hand1, hand2) {
  // Remplir un tableau avec la valeur de la carte
  let valeurCardHand1 = [];
  for (var i = 0; i < hand1.length; i++) 
  {
    let valeur = hand1[i].substr(0, 1);
    valeurCardHand1.push(valeur);
  }

  let valeurCardHand2 = [];
  for (var i = 0; i < hand2.length; i++) 
  {
    let valeur = hand2[i].substr(0, 1);
    valeurCardHand2.push(valeur);
  }

  // tableau convertissant la valeur de la carte en ordre de la plus petite à la plus grande
  let ordreCard1 =(valeurCardHand1.map((x) => order.indexOf(x)));
  let ordreCard2 = (valeurCardHand2.map((x) => order.indexOf(x)));

  // Tableau permettant de connaitre le nombre de fois ou l'on la même carte
  let numberOfSameCard1 = [];
  for (var i = 0; i < ordreCard1.length; i++) 
  {
    if (numberOfSameCard1[ordreCard1[i]]) 
    {
      numberOfSameCard1[ordreCard1[i]] =
        numberOfSameCard1[ordreCard1[i]] + 1;
    }
    else 
    {
      numberOfSameCard1[ordreCard1[i]] = 1;
    }
  }

  let numberOfSameCard2 = [];
  for (var i = 0; i < ordreCard2.length; i++) 
  {
    if (numberOfSameCard2[ordreCard2[i]]) 
    {
      numberOfSameCard2[ordreCard2[i]] =
        numberOfSameCard2[ordreCard2[i]] + 1;
    } 
    else 
    {
      numberOfSameCard2[ordreCard2[i]] = 1;
    }
  }

  // Il y a au moins une paire dans chaque main
  if ((numberOfSameCard1.indexOf(2) !== -1) && (numberOfSameCard2.indexOf(2) !== -1)) 
  {
    var paire1 = [];
    var paire2 = [];

    // trouver la paire par main
    for (var valeur in numberOfSameCard1) 
    {
      if (numberOfSameCard1[valeur] == 2 ) 
      {
        paire1.push(valeur);
      }
    }
    let maxPaire1 = Math.max(...paire1);
    let nombreOfPaire1 = paire1.length;
  
    for (var valeur in numberOfSameCard2) 
    {
      if (numberOfSameCard2[valeur] == 2) 
      {
        paire2.push(valeur);
      }
    }
    let maxPaire2 = Math.max(...paire2);
    let nombreOfPaire2 = paire2.length;

    // Si les paires max ne sont pas les mêmes
    if (( nombreOfPaire1 == nombreOfPaire2)  )
    {
      if(maxPaire1 == maxPaire2 )
      {
        var result = paire1[0]>paire2[0] ? '1' : '2';
      }
      else
      {
        var result = maxPaire1 > maxPaire2 ? '1' : '2';
      }
    }
    else
    {
      var result = maxPaire1 > maxPaire2 ? '1' : '2';
    }
    return result;
  }
 //Il y a au moins une paire dans une main et des cartes simples dans l'autre
 else if(!((numberOfSameCard1.indexOf(2) == -1) && (numberOfSameCard2.indexOf(2) == -1)))
  {

    let result = numberOfSameCard1.indexOf(2) !== -1 ? '1': '2';
    return result;
  }
  // Il n'y a que des cartes simples dans les mains
  else if ((numberOfSameCard1.indexOf(2) == -1) && (numberOfSameCard1.indexOf(2) == -1)) 
  {
    // faire un tableau (fonction map) pour déterminer l'ordre des cartes

    // Trouve la carte la plus grande
    let maxcard1 = Math.max(...ordreCard1);
    let maxcard2 = Math.max(...ordreCard2);

    let result = maxcard1 > maxcard2 ? '1' : '2';
    return result;
  }
}
export { pokerResult };
