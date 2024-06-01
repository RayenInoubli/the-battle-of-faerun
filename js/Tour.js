class Tour {

    tour(chateauBleu, chateauRouge, plateau, equipeB, equipeR) {

        let resultatTour = "";

        while (!resultatTour) {
            
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

        return resultatTour;
    }
}