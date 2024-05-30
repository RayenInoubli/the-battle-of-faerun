const chateauBleu = new Chateau({
    nain: "./assets/nain_b.png",
    chefNain: "./assets/chef_nain_b.png",
    chefElfe: "./assets/chef_elfe_b.png",
    elfe: "./assets/elfe_b.png",
});
const chateauRouge = new Chateau({
    nain: "./assets/nain_r.png",
    chefNain: "./assets/chef_nain_r.png",
    chefElfe: "./assets/chef_elfe_r.png",
    elfe: "./assets/elfe_r.png",
});
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
menu.afficherMenuEntrainement(chateauBleu, chateauRouge, plateau, bleuT1, rougeT1, continuer);
