class Menu {

    constructor() {
        this.tour = new Tour();
    }

    afficherMenuEntrainement(chateauBleu, chateauRouge, plateau) {
        let equipes = {};

        let resTotaleB = 0;
        let resTotaleR = 0;

        const dialog = document.createElement('dialog');
        dialog.setAttribute('id', "menu_entrainement")

        
        dialog.innerHTML = `
            <div id="dialog_container">
                <header>
                    <h1> La bataille de Faërun </h1>
                </header>
                <div id="dialog_body"> 
                    <form id="blue_form">
                        <div class="input_container"> 
                            <label> 
                                <img src="./assets/nain_bleu.png" alt="???" width="130"> 
                            </label>
                            <div class="input_wrapper"> 
                                <input type="number" class="qte" id="nain_bleu" name="nain_bleu" step="1" min="0">
                            </div>
                        </div>
                        <div class="input_container"> 
                            <label> 
                                <img src="./assets/elfe_bleu.png" alt="ggggg" width="130"> 
                            </label>
                            <div class="input_wrapper"> 
                                <input type="number" class="qte" id="elfe_bleu" name="elfe_bleu" step="1" min="0">
                            </div>
                        </div>
                        <div class="input_container"> 
                            <label> 
                                <img src="./assets/chef_nain_bleu.png" alt="???" width="130"> 
                            </label>
                            <div class="input_wrapper"> 
                                <input type="number" class="qte" id="chef_nain_bleu" name="chef_nain_bleu" step="1" min="0">
                            </div>
                        </div>
                        <div class="input_container"> 
                            <label> 
                                <img src="./assets/chef_elfe_bleu.png" alt="???" width="130"> 
                            </label>
                            <div class="input_wrapper"> 
                                <input type="number" class="qte" id="chef_elfe_bleu" name="chef_elfe_bleu" step="1" min="0">
                            </div>
                        </div>
                    </form>
                    <form id="red_form"> 
                        <div class="input_container"> 
                            <label> 
                                <img src="./assets/nain_rouge.png" alt="???" width="130"> 
                            </label>
                            <div class="input_wrapper"> 
                                <input type="number" class="qte" id="nain_rouge" name="nain_rouge" step="1" min="0">
                            </div>
                        </div>
                        <div class="input_container"> 
                            <label> 
                                <img src="./assets/elfe_rouge.png" alt="???" width="130"> 
                            </label>
                            <div class="input_wrapper"> 
                                <input type="number" class="qte" id="elfe_rouge" name="elfe_rouge" step="1"min="0">
                            </div>
                        </div>
                        <div class="input_container"> 
                            <label> 
                                <img src="./assets/chef_nain_rouge.png" alt="???" width="130"> 
                            </label>
                            <div class="input_wrapper"> 
                                <input type="number" class="qte" id="chef_nain_rouge" name="chef_nain_rouge" step="1" min="0">
                            </div>
                        </div>
                        <div class="input_container"> 
                            <label> 
                                <img src="./assets/chef_elfe_rouge.png" alt="???" width="130"> 
                            </label>
                            <div class="input_wrapper"> 
                                <input type="number" class="qte" id="chef_elfe_rouge" name="chef_elfe_rouge" step="1" min="0">
                            </div>
                        </div>
                    </form>
                </div>
                <footer> 
                    <button type="submit" id="start_menu_btn"> Commencer le jeux </button> 
                </footer>
            </div>
        `;
        
        document.body.appendChild(dialog);
        dialog.showModal();
        
        dialog.style.position = 'fixed';
        dialog.style.left = '50%';
        dialog.style.top = '50%';
        dialog.style.transform = 'translate(-50%, -50%)';

        const startBtn = document.getElementById('start_menu_btn');
        startBtn.addEventListener('click', (event) => {
            event.preventDefault();

            const blueNain = document.getElementById('nain_bleu').value;
            const blueElfe = document.getElementById('elfe_bleu').value;
            const blueChefNain = document.getElementById('chef_nain_bleu').value;
            const blueChefElfe = document.getElementById('chef_elfe_bleu').value;

            const redNain = document.getElementById('nain_rouge').value;
            const redElfe = document.getElementById('elfe_rouge').value;
            const redChefNain = document.getElementById('chef_nain_rouge').value;
            const redChefElfe = document.getElementById('chef_elfe_rouge').value;

            equipes = {
                nain_bleu: blueNain || 0, 
                elfe_bleu: blueElfe || 0, 
                chefNain_bleu: blueChefNain || 0, 
                chefElfe_bleu: blueChefElfe || 0,
                nain_rouge: redNain || 0, 
                elfe_rouge: redElfe || 0, 
                chefNain_rouge: redChefNain || 0, 
                chefElfe_rouge: redChefElfe || 0
            }


            let {equipeB, equipeR} = this.convertirEquipes(equipes);

            dialog.close();

            console.log("equipeB à entrainer: ",equipeB);
            console.log("equipeR à entrainer: ",equipeR);

            this.tour.tour(chateauBleu, chateauRouge, plateau, equipeB, equipeR).then((resultat) => {
                if (resultat) {

                    if (resultat == 1 || resultat == 2) {

                        alert("le gagnant est: "+(resultat == 1 ? "equipe bleu" : "equipe rouge"));
                        dialog.showModal();
                    } else {
                        this.afficherMenuGagnant(resultat)
                        dialog.close();
                    }
                }
            })
            .catch((error) => {
                console.error("An error occurred during the tour:", error);
            });

        })
    }

    afficherMenuGagnant(gagnant, dialogEnt) {

        const dialog = document.createElement('dialog');

        dialog.setAttribute("id", "menu_gagnant")
        
        dialog.innerHTML = `
            <div id="dialog_container">
                <header> 
                    <h1> La bataille de Faërun </h1>
                </header>
                <div id="winner_dialog_body"> 
                    <h1 id="gagnant"></h1>
                </div>
                <footer> 
                    <button type="submit" id="continue_btn"> Rejouer </button> 
                </footer>
            </div>
        `;
        
        document.body.appendChild(dialog);
        dialog.showModal();
        
        dialog.style.position = 'fixed';
        dialog.style.left = '50%';
        dialog.style.top = '50%';
        dialog.style.transform = 'translate(-50%, -50%)';
        
        document.getElementById('gagnant').innerHTML = "Le gagnant est l'equipe <span id="+gagnant+">"+gagnant+"</span>";
        
        const startBtn = document.getElementById('continue_btn');
        startBtn.addEventListener('click', (event) => {
            event.preventDefault();

            location.reload();

        })
    }

    convertirEquipes(equipes) {
        console.log("equipes: ",equipes)
        let equipeB = [];
        let equipeR = [];
    
        for (let key in equipes) {
            let count = equipes[key]*1;
            let character = key.split('_')[0];
    
            if (key.includes('bleu')) {
                equipeB = equipeB.concat(Array(count).fill(character));
            } else if (key.includes('rouge')) {
                equipeR = equipeR.concat(Array(count).fill(character));
            }
        }
    
        return { equipeB, equipeR };
    }
}