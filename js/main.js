let chateauRouge = new window.Chateau();

let chateauBleu = new window.Chateau();

chateauRouge.ajouterAFile('nain');
chateauRouge.ajouterAFile('chef nain');

chateauRouge.ajouterAFile('elfe');

chateauRouge.ajouterAFile('elfe');

// Simulation de plusieurs tours d'entraînement
for (let i = 0; i < 4; i++) {
    console.log('Tour ' + (i + 1) + ' : château possède ' + chateauRouge.ressources + ' ressources');
    chateauRouge.tour();
    console.log('Etat final : château ' + chateauRouge.ressources + ' ressources, ' + chateauRouge.guerriers.length + ' guerriers prêts à se battre');
    console.log(chateauRouge.guerriers);
}