const chateauBleu = new Chateau();
const chateauRouge = new Chateau();

const plateau = new Plateau();

let res = "";
let continuer = true

const bleuT1 = [["nain", "nain"]];
// const bleuT2 = [new Elfe()];

const rougeT1 = [["elfe", "nain"]];
// const rougeT2 = [new Nain, new Elfe()];

// console.log("tour 1");
// res = plateau.avancement(bleuT1, rougeT1, chateauBleu, chateauRouge);

// console.log("tour 2");
// res = plateau.avancement(bleuT2, rougeT2, chateauBleu, chateauRouge);

// console.log("tour 3");
// res = plateau.avancement([], [], chateauBleu, chateauRouge);

// console.log("tour 4");
// res = plateau.avancement([], [], chateauBleu, chateauRouge);

// console.log("final result = ", res);

// console.log("final ressource B = ", chateauBleu.ressources);
// console.log("final ressource R = ", chateauRouge.ressources);

// for (let i = 0; i < 5; i++) {
    
//     console.log(bleuT1[i])
//     chateauBleu.ajouterAFile(bleuT1[i] || []);
//     chateauRouge.ajouterAFile(rougeT1[i] || []);

//     chateauBleu.entrainement();
//     chateauRouge.entrainement();

//     console.log("guerriers B = ", chateauBleu.guerriers);
//     console.log("guerriers R = ", chateauRouge.guerriers);
// }

let i = 0
while (continuer && !res) {
    console.log('tour: ',i);

    chateauBleu.ajouterAFile(bleuT1[i] || []);
    chateauRouge.ajouterAFile(rougeT1[i] || []);

    chateauBleu.tour();
    chateauRouge.tour();

    console.log("guerriers B before avancement = ", chateauBleu.guerriers);
    console.log("guerriers R before avancement = ", chateauRouge.guerriers);

    res = plateau.avancement(chateauBleu.guerriers, chateauRouge.guerriers, chateauBleu, chateauRouge);

    chateauBleu.guerriers = [];
    chateauRouge.guerriers = [];
}

console.log("final result = ", res);

console.log("final ressource B = ", chateauBleu.ressources);
console.log("final ressource R = ", chateauRouge.ressources);