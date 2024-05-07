class Chateau {
    
    constructor() {
        this.guerriers = [];
        this.ressources = 3;
        this.fileDAttente = [];
    }

    ajouterAFile(type) {
        this.fileDAttente.push(type);
    }

    entrainement() {
        let guerrier;
        switch (this.fileDAttente[0]) {
            case 'nain':
                guerrier = new Nain();
                break;
            case 'elfe':
                guerrier = new Elfe();
                break;
            case 'chef nain':
                guerrier = new ChefNain();
                break;
            case 'chef elfe':
                guerrier = new ChefElfe();
                break;
            default:
                guerrier = new Guerrier();
        }

        if (this.ressources >= guerrier.cout) {
            this.ressources -= guerrier.cout;
            this.guerriers.push(guerrier);
            this.fileDAttente.shift();
            return true;
        } else {
            console.log('Ressources insuffisantes pour entraîner ' + this.fileDAttente[0]);
            return false;
        }
    }

    tour() {
        while (this.fileDAttente.length > 0 && this.entrainement()) {
            // Rien à faire ici, la boucle continue tant qu'il y a des guerriers à entraîner et des ressources disponibles
        }
        // Récupère une ressource
        // this.ressources += 1;
    }
}

window.Chateau = Chateau;