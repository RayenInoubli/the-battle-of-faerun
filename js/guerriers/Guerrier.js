class Guerrier {
    constructor(type, force, pointsDeVie, cout, couleur) {
        this.type = type;
        this.force = force;
        this.pointsDeVie = pointsDeVie;
        this.cout = cout;
        this.coleur = couleur;
    }

    attaquer() {
        let degats = 0;
        for (let i = 0; i < this.force; i++) {
            degats += Math.floor(Math.random() * 3) + 1;
        }
        return degats;
    }

    recevoirDegats(degats) {
        if (this.type === 'nain') {
            degats = Math.floor(degats / 2);
        } else if (this.type === 'chef nain') {
            degats = Math.floor(degats / 4);
        }

        this.pointsDeVie -= degats;
        if (this.pointsDeVie <= 0) {
            console.log(`Le guerrier ${this.type} est mort !`);
        }
    }
}