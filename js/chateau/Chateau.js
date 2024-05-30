class Chateau {
    
    constructor(images) {
        this.guerriers = [];
        this.ressources = 3;
        this.fileDAttente = [];
        this.images = images;
    }

    ajouterAFile(file) {
        this.fileDAttente = this.fileDAttente.concat(file);
    }

    entrainement() {
        let continuer = true;
        while(this.fileDAttente.length > 0 && continuer) {
            let guerrier;
            switch (this.fileDAttente[0]) {
                case 'nain':
                    guerrier = new Nain(10 ,100 ,1 ,this.images.nain);
                    break;
                case 'elfe':
                    guerrier = new Elfe(10 ,100 ,2 ,this.images.elfe);
                    break;
                case 'chefNain':
                    guerrier = new ChefNain(10 ,100 ,3 ,this.images.chefNain);
                    break;
                case 'chefElfe':
                    guerrier = new ChefElfe(10 ,100 ,4 ,this.images.chefElfe);
                    break;
                default:
                    guerrier = new Guerrier();
            }

            if (this.ressources >= guerrier.cout) {
                this.ressources -= guerrier.cout;
                this.guerriers.push(guerrier);
                this.fileDAttente.shift();
            } else {
                console.log('Ressources insuffisantes pour entraîner ' + this.fileDAttente[0]);
                continuer = false;
            }
        }
    }
}