class ChefElfe extends Elfe {
    constructor(force = 10, pointsDeVie = 100, cout = 4) {
        super(force * 2, pointsDeVie, cout);
        this.type = 'chef elfe';
    }

    attaquer() {
        return super.attaquer();
    }
}