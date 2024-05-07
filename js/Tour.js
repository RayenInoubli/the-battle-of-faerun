class Tour {
    

    tour(listeB, listeR) {

        let chateauB = new Chateau();
        let chateauR = new Chateau();

        let plateau = new Plateau();

        chateauB.fileDAttente.contact(listeB)
        chateauR.fileDAttente.contact(listeR)

        chateauB.tour();
        chateauR.tour();

        let equipeB = chateauB.guerriers;
        let equipeR = chateauR.guerriers;

        while (plateau.checkBataille() == 0) {
            plateau.avancement(equipeB, equipeR);
        }


    }
}