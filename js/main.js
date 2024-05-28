const chateauBleu = new Chateau();
const chateauRouge = new Chateau();
const plateau = new Plateau();
const menu = new Menu();
const tour = new Tour();


// let res = "";
let continuer = true

const bleuT1 = ["nain", "nain"];

const rougeT1 = ["elfe", "nain"];

// }
let equipesAentrainer = {};


let i = 0
menu.afficherMenu(chateauBleu, chateauRouge, plateau, bleuT1, rougeT1, continuer);
