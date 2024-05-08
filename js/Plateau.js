class Plateau {

    constructor() {
        this.carreaux = new Carreau();
        this.listeAvancementB = []
        this.listeAvancementR = []
    }

    avancement(listeB, listeR, chatB, chatR) {
        
        let pasDeBataille = true;
        let estGagnant = "";
        let resultatBataille = 0;

        if (listeB.length > 0) {
            console.log('add B')
            this.listeAvancementB.push({
                equipe: listeB,
                position: 0
            })
        }

        if (listeR.length > 0) {
            console.log('add R')
            this.listeAvancementR.push({
                equipe: listeR,
                position: 6
            })
        }

        this.eliminerRedondance();

        
        while (pasDeBataille) {
            for (let i = 0; i < this.listeAvancementB.length; i++) {
                this.listeAvancementB[i].position++;
            }

            if (this.listeAvancementB[0]?.position == this.listeAvancementR[0]?.position) {
                console.log("fffffffffffffffb");
                resultatBataille = this.lancerBataille(this.listeAvancementB[0].equipe, this.listeAvancementR[0].equipe, chatB, chatR);
                pasDeBataille = false;
            }

            for (let i = 0; i < this.listeAvancementR.length; i++) {
                this.listeAvancementR[i].position--;
            }

            if (this.listeAvancementB[0]?.position == this.listeAvancementR[0]?.position) {
                console.log("fffffffffffffffr");
                resultatBataille = this.lancerBataille(this.listeAvancementB[0].equipe, this.listeAvancementR[0].equipe, chatB, chatR);
                pasDeBataille = false;
            }

            if (this.listeAvancementB[0] && this.listeAvancementB[0]?.position == 5) {
                estGagnant = "bleu";
                break;
            }

            if (this.listeAvancementR[0] && this.listeAvancementR[0]?.position == 1) {
                estGagnant = "rouge";
                break;
            }

            console.log('equipe B', this.listeAvancementB);
            console.log('equipe R', this.listeAvancementR);
        }

        if (resultatBataille == 1) {
            console.log("team bleu won battle");
            this.listeAvancementR.shift();
            if (this.listeAvancementR.length > 0) {
                for(let i = 0; i < this.listeAvancementR.length-1; i++) { this.listeAvancementR[i].position++; }
            }
        } else if (resultatBataille == 2) {
            console.log("team rouge won battle");
            this.listeAvancementB.shift();
            if (this.listeAvancementB.length > 0) {
                for(let i = 0; i < this.listeAvancementB.length-1; i++) { this.listeAvancementB[i].position--; }
            }
        } else {
            return estGagnant;
        }

        return resultatBataille;
    }

    eliminerRedondance() {
        for (let i = 0; i < this.listeAvancementB.length - 1; i++) {
            for (let j = i + 1; j < this.listeAvancementB.length; j++) {
                if (this.listeAvancementB[i].position === this.listeAvancementB[j].position) {
                    this.listeAvancementB[i].liste = this.listeAvancementB[i].liste.concat(this.listeAvancementB[j].liste);
                    this.listeAvancementB.splice(j, 1);
                }
            }
        }

        for (let i = 0; i < this.listeAvancementR.length - 1; i++) {
            for (let j = i + 1; j < this.listeAvancementR.length; j++) {
                if (this.listeAvancementR[i].position === this.listeAvancementR[j].position) {
                    this.listeAvancementR[i].liste = this.listeAvancementR[i].liste.concat(this.listeAvancementR[j].liste);
                    this.listeAvancementR.splice(j, 1);
                }
            }
        }
    }

    lancerBataille(equipeB, equipeR, resourceB, resourceR) {
        let resultat = 0;

        this.carreaux.setGuerriersBleu(equipeB);
        this.carreaux.setGuerriersRouge(equipeR);
        resultat = this.carreaux.bataille(resourceB, resourceR);

        return resultat;
    }
}