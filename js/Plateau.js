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

        const avancerEquipe = () => {
            if (pasDeBataille) {
                // Avancement de l'équipe B
                for (let i = 0; i < this.listeAvancementB.length; i++) {
                    this.listeAvancementB[i].position++;
                }
        
                // Vérification de bataille pour l'équipe B
                if (this.listeAvancementB[0]?.position == this.listeAvancementR[0]?.position) {
                    console.log("fffffffffffffffb");
                    resultatBataille = this.lancerBataille(this.listeAvancementB[0].equipe, this.listeAvancementR[0].equipe, chatB, chatR);
                    pasDeBataille = false;
                }
        
                // Avancement de l'équipe R
                for (let i = 0; i < this.listeAvancementR.length; i++) {
                    this.listeAvancementR[i].position--;
                }
        
                // Vérification de bataille pour l'équipe R
                if (this.listeAvancementB[0]?.position == this.listeAvancementR[0]?.position) {
                    console.log("fffffffffffffffr");
                    resultatBataille = this.lancerBataille(this.listeAvancementB[0].equipe, this.listeAvancementR[0].equipe, chatB, chatR);
                    pasDeBataille = false;
                } 
                
                // Vérification des conditions de victoire
                if (this.listeAvancementB[0] && this.listeAvancementB[0]?.position > 5) {
                    estGagnant = "bleu";
                    pasDeBataille = false;
                } else if (this.listeAvancementR[0] && this.listeAvancementR[0]?.position < 1) {
                    estGagnant = "rouge";
                    pasDeBataille = false;
                }
        
                // Affichage des équipes
                console.log('equipe B', this.listeAvancementB);
                console.log('equipe R', this.listeAvancementR);
                this.afficherEquipes();
        
                // Si pas de bataille ni de victoire, avancer encore après un délai
                if (pasDeBataille) {
                    setTimeout(avancerEquipe, 10000); // 1000 ms delay for the next step
                }
            }
        };
        
        avancerEquipe();
        
        
        /*while (pasDeBataille) {
            setTimeout(() => {}, 10000)
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

            if (this.listeAvancementB[0] && this.listeAvancementB[0]?.position > 5) {
                estGagnant = "bleu";
                break;
            }

            if (this.listeAvancementR[0] && this.listeAvancementR[0]?.position < 1) {
                estGagnant = "rouge";
                break;
            }

            console.log('equipe B', this.listeAvancementB);
            console.log('equipe R', this.listeAvancementR);
            this.afficherEquipes();
            
        }*/

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
    
        champsDeBataille.forEach(carreau => {
            carreau.querySelector('.equipe_bleu_fa').innerHTML = "";
            carreau.querySelector('.equipe_rouge_fa').innerHTML = "";
        });
    
        this.listeAvancementB.forEach(avancement => {
            const equipeBElement = document.createElement('li');
            equipeBElement.textContent = avancement.equipe.map(guerrier => guerrier.type).join(', ');
            console.log("position bleu: ", avancement.position - 1);
            let equipeBDiv = champsDeBataille[avancement.position - 1].querySelector('.equipe_bleu_fa');
            equipeBDiv.appendChild(equipeBElement);
        });
    
        this.listeAvancementR.forEach(avancement => {
            const equipeRElement = document.createElement('li');
            equipeRElement.textContent = avancement.equipe.map(guerrier => guerrier.type).join(', ');
            console.log("position red: ", avancement.position - 1);
            let equipeRDiv = champsDeBataille[avancement.position - 1].querySelector('.equipe_rouge_fa');
            equipeRDiv.appendChild(equipeRElement);
        });
    }
}