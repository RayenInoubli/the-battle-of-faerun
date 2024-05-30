class Carreau {

    constructor() {
        this.guerriersBleu = [];
        this.guerriersRouge = [];
    }

    setGuerriersBleu(guerriers) {
        this.guerriersBleu = guerriers;
    }

    setGuerriersRouge(guerriers) {
        this.guerriersRouge = guerriers;
    }

    bataille(chatB, chatR) {

        console.log("bataille entre les bleus: ", this.guerriersBleu, " et les rouges: ", this.guerriersRouge);

        while (this.guerriersBleu.length > 0 && this.guerriersRouge.length > 0) {
            for (let i = 0; i < this.guerriersBleu.length; i++) {
                let degat = this.guerriersBleu[i].attaquer();
                this.guerriersRouge[0]?.recevoirDegats(degat);
                if (this.guerriersRouge[0]?.pointsDeVie <= 0) {
                    if (this.guerriersRouge.length > 1) {
                        this.guerriersRouge[1].recevoirDegats(-this.guerriersRouge[0]?.pointsDeVie);
                    }
                    this.guerriersRouge.shift();
                }
            }

            chatB.ressources++;
            console.log('team r: ', this.guerriersRouge)

            for (let i = 0; i < this.guerriersRouge.length; i++) {
                let degat = this.guerriersRouge[i].attaquer();
                this.guerriersBleu[0]?.recevoirDegats(degat);
                if (this.guerriersBleu[0]?.pointsDeVie <= 0) {
                    if (this.guerriersBleu.length > 1) {
                        this.guerriersBleu[1].recevoirDegats(-this.guerriersBleu[0]?.pointsDeVie);
                    }
                    this.guerriersBleu.shift();
                }
            }

            chatR.ressources++;
            console.log('team b: ', this.guerriersBleu)
        }

        if (this.guerriersBleu.length == 0) {
            console.log('team r won!!!!!: ', this.guerriersRouge)
            return 2;
        }
        if (this.guerriersRouge.length == 0) {
            console.log('team b won!!!!!: ', this.guerriersBleu)
            return 1;
        }

        return 0
    }
}