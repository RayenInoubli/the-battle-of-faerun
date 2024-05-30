class ChefElfe extends Elfe {
    constructor(force = 10, pointsDeVie = 100, cout = 4, image) {
        super(force * 2, pointsDeVie, cout, image);
        this.type = 'chef elfe';
    }

    attaquer() {
        return super.attaquer();
    }
}