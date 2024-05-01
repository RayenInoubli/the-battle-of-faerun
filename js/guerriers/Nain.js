class Nain extends Guerrier {
    constructor(force = 10, pointsDeVie = 100, cout = 1) {
        super('nain', force, pointsDeVie, cout);
    }

    recevoirDegats(degats) {
        super.recevoirDegats(degats / 2);
    }
}