import Menu from "./menu.ts";
import Objets from "./ClassObjet/Objet.ts"
import Potion from "./ClassObjet/potion.ts"
import Perso from "./caracter/Personnage.ts"
import Fight from "./fight.ts";
import Salle from "./Map/salle.ts";

class GameManager {
    inventory : Objets[] = [new Potion(), new Potion(), new Potion()]
    /**
     * Initialise la liste qui va contenir l'équipe du joueur
     * @type {Perso[]}
     */
    equipe: Perso[] = [];
    /**
     * @type {number} Variable qui contient dans quelle salle est le joueur
     */
    place: number = 1;
    startGame() {
        this.equipe = new Menu().chooseCharacter();//lance et initialise le menu de choix de personnage
        console.log(this.equipe)
        let salle = new Salle();
        salle.salle(this.place);

    }
    constructor(){
        this.startGame();//lance le jeu
    }
}   
let gameManager = new GameManager();    
