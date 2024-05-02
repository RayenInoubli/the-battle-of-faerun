class Plateau {

    Plateau() {
        this.carreaux = [ [], [], [], [], [] ];
    }
    
    avancement(listeB, listeR) {
        // let lastList = this.carreaux[4];
        // for (let i = 4; i > 0; i--) {
        //     this.carreaux[i] = this.carreaux[i - 1];
        // }
        // this.carreaux[0] = lastList;
        
        for (let i = 0; i < 5; i++) {
            
        }
        this.carreaux[0] = listeB;
        
        for (let j = 4; j >= 0; j--) {
            
        }
        this.carreaux[4] = listeR;
    }

    bataille() {}
}