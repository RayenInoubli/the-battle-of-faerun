class ChefNain extends Nain {
    constructor(force = 10, pointsDeVie = 100, cout = 3) {
        super(force * 2, pointsDeVie, cout);
        this.type = 'chef nain';
    }

    attaquer() {
        return super.attaquer();
    }
}