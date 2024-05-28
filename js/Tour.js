class Tour {

    tour(chateauBleu, chateauRouge, plateau, equipeB, equipeR, continuer) {

        let resultatTour = "";

        while (continuer && !resultatTour) {
            
            chateauBleu.ajouterAFile(equipeB || []);
            chateauRouge.ajouterAFile(equipeR || []);

            chateauBleu.entrainement();
            chateauRouge.entrainement();

            resultatTour = plateau.avancement(chateauBleu.guerriers, chateauRouge.guerriers, chateauBleu, chateauRouge);
            
            chateauBleu.guerriers = [];
            chateauRouge.guerriers = [];
        }

        console.log("final result = ", resultatTour);

        console.log("final ressource B = ", chateauBleu.ressources);
        console.log("final ressource R = ", chateauRouge.ressources);
    }
}