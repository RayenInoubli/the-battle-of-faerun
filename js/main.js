// let chateauRouge = new window.Chateau();

// chateauRouge.ajouterAFile('nain');
// chateauRouge.ajouterAFile('nain');

// chateauRouge.ajouterAFile('elfe');
// chateauRouge.ajouterAFile('elfe');

// for (let i = 0; i < 4; i++) {
//     console.log('Tour ' + (i + 1) + ' : château possède ' + chateauRouge.ressources + ' ressources');
//     chateauRouge.tour();
//     console.log('Etat final : château ' + chateauRouge.ressources + ' ressources, ' + chateauRouge.guerriers.length + ' guerriers prêts à se battre');
//     chateauRouge.guerriers = [];
// }

const plateau = new Plateau();

const bleuT1 = [new Nain(), new Nain()];
const bleuT2 = [];
const bleuT3 = [];
const bleuT4 = [];
const bleuT5 = [];
const bleuT6 = [];

const rougeT1 = [new Elfe()];
const rougeT2 = [];
const rougeT3 = [];
const rougeT4 = [];
const rougeT5 = [];
const rougeT6 = [];

console.log("tour 1");
plateau.avancement(bleuT1, rougeT1);

console.log("tour 2");
plateau.avancement(bleuT2, rougeT2);

console.log("tour 3");
plateau.avancement(bleuT3, rougeT3);

console.log("tour 4");
plateau.avancement(bleuT4, rougeT4);

console.log("tour 5");
plateau.avancement(bleuT5, rougeT5);

console.log("tour 6");
plateau.avancement(bleuT6, rougeT6);

if (plateau.listeAvancementB[0]?.position > 5) {
    console.log("bleu team won  the game");   
}

if (plateau.listeAvancementR[0]?.position < 1) {
    console.log("red team won  the game");   
}