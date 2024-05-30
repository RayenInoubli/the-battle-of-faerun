class Nain extends Guerrier {
    constructor(force = 10, pointsDeVie = 100, cout = 1, image) {
        super('nain', force, pointsDeVie, cout, image);
    }

    recevoirDegats(degats) {
        super.recevoirDegats(degats / 2);
    }
}