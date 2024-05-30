class Plateau {

    constructor() {
        this.carreaux = [new Carreau(), new Carreau(), new Carreau(), new Carreau(), new Carreau()];
        this.listeAvancementB = []
        this.listeAvancementR = []
    }

    async avancement(listeB, listeR, chatB, chatR) {
        
        let pasDeBataille = true;
        let estGagnant = "";
        let resultatBataille = 0;
        let bluePosition = -1;
        let redPosition = 5;
        let positionBataille = 0;

        if (listeB.length > 0 && (bluePosition === -1 || this.carreaux[0].guerriersBleu.length === 0)) {
            this.carreaux[0].guerriersBleu = listeB;
            bluePosition = 0;
        }

        if (listeR.length > 0 && (redPosition === 5 || this.carreaux[4].guerriersRouge.length === 0)) {
            this.carreaux[4].guerriersRouge = listeR;
            redPosition = 4;
        }
        
        const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
        

        while (pasDeBataille) {
        
            this.afficherEquipes();
            await delay(1000);

            for (let i = 4; i >= 0; i--) {
                if (this.carreaux[i].guerriersBleu.length > 0 && i < 4 && this.carreaux[i + 1].guerriersBleu.length === 0) {
                  this.carreaux[i + 1].guerriersBleu = this.carreaux[i].guerriersBleu;
                  this.carreaux[i].guerriersBleu = [];
                }
            }

            this.afficherEquipes();
            await delay(1000);

            for (let i = 0; i < 5; i++) {
                console.log(this.carreaux[i].guerriersBleu, this.carreaux[i].guerriersRouge);
                if (this.carreaux[i].guerriersBleu.length > 0 && this.carreaux[i].guerriersRouge.length > 0) {
                    console.log('rrrrrrrrrrrrrrrrrrrrr')
                    positionBataille = i;
                    resultatBataille = this.carreaux[i].bataille(chatB, chatR);
                    pasDeBataille = false;
                }
            }

            for (let i = 0; i < 5; i++) {
                if (this.carreaux[i].guerriersRouge.length > 0 && i > 0 && this.carreaux[i - 1].guerriersRouge.length === 0) {
                  this.carreaux[i - 1].guerriersRouge = this.carreaux[i].guerriersRouge;
                  this.carreaux[i].guerriersRouge = [];
                }
            }

            this.afficherEquipes();
            await delay(1000);

            for (let i = 0; i < 5; i++) {
                if (this.carreaux[i].guerriersBleu.length > 0 && this.carreaux[i].guerriersRouge.length > 0) {
                    positionBataille = i;
                    resultatBataille = this.carreaux[i].bataille(chatB, chatR);
                    pasDeBataille = false;
                }
            }

            if (this.carreaux[4].guerriersBleu.length > 0 && this.carreaux[4].guerriersRouge.length == 0) {
                estGagnant = "bleu";
                break;
            }

            if (this.carreaux[0].guerriersRouge.length > 0 && this.carreaux[0].guerriersBleu.length == 0) {
                estGagnant = "rouge";
                break;
            }

            this.afficherEquipes();
            await delay(1000);
        }

        if (resultatBataille == 1) {
            console.log("team bleu won battle");
            this.carreaux[positionBataille].guerriersRouge = [];
        } else if (resultatBataille == 2) {
            console.log("team rouge won battle");
            this.carreaux[positionBataille].guerriersBleu = [];
        } else {
            return estGagnant;
        }

        return resultatBataille;
    }

    eliminerRedondance() {
        for (let i = 0; i < this.listeAvancementB.length - 1; i++) {
            for (let j = i + 1; j < this.listeAvancementB.length; j++) {
                if (this.listeAvancementB[i].position === this.listeAvancementB[j].position) {
                    this.listeAvancementB[i].equipe = this.listeAvancementB[i].equipe.concat(this.listeAvancementB[j].equipe);
                    this.listeAvancementB.splice(j, 1);
                }
            }
        }

        for (let i = 0; i < this.listeAvancementR.length - 1; i++) {
            for (let j = i + 1; j < this.listeAvancementR.length; j++) {
                if (this.listeAvancementR[i].position === this.listeAvancementR[j].position) {
                    this.listeAvancementR[i].equipe = this.listeAvancementR[i].equipe.concat(this.listeAvancementR[j].equipe);
                    this.listeAvancementR.splice(j, 1);
                }
            }
        }
    }

    lancerBataille(equipeB, equipeR, chatB, chatR) {
        let resultat = 0;

        this.carreaux.setGuerriersBleu(equipeB);
        this.carreaux.setGuerriersRouge(equipeR);
        resultat = this.carreaux.bataille(chatB, chatR);

        return resultat;
    }

    afficherEquipes() {
        const champsDeBataille = document.querySelectorAll(".carreau");
        
        champsDeBataille.forEach((carreau, i) => {
            carreau.querySelector('.equipe_bleu_fa').innerHTML = "";
            carreau.querySelector('.equipe_rouge_fa').innerHTML = "";

            let equipeBDiv = champsDeBataille[i].querySelector('.equipe_bleu_fa');
            let equipeRDiv = champsDeBataille[i].querySelector('.equipe_rouge_fa');
            const equipeBElement = document.createElement('li');
            const equipeRElement = document.createElement('li');

            for (let j = 0; j < this.carreaux[i].guerriersBleu.length; j++) {
                const imgElement = document.createElement('img');
                imgElement.src = this.carreaux[i].guerriersBleu[j].image;
                imgElement.alt = this.carreaux[i].guerriersBleu[j].type;
                equipeBElement.appendChild(imgElement);
            }

            for (let j = 0; j < this.carreaux[i].guerriersRouge.length; j++) {
                const imgElement = document.createElement('img');
                imgElement.src = this.carreaux[i].guerriersRouge[j].image;
                imgElement.alt = this.carreaux[i].guerriersRouge[j].type;
                equipeRElement.appendChild(imgElement);
            }


            equipeBDiv.appendChild(equipeBElement);
            equipeRDiv.appendChild(equipeRElement);
        });
    }
}