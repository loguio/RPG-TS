import Menu from "./menu.ts";
import Objets from "./ClassObjet/Objet.ts"
import Potion from "./ClassObjet/potion.ts"

class GameManager {
    inventory : Objets[] = [new Potion(), new Potion(), new Potion()]
    equipe: Perso[] = [];
    startGame() {
        this.equipe = new Menu().chooseCharacter();
        this.fight()
    }
    
    ekip: Perso[] = [];
    fight() {
        this.equipe[0].Attack(this.ekip[1]);
        this.equipe[0].Attack(this.ekip[1]);
        this.equipe[1].Heal();
    }
    constructor(){
        this.startGame();
    }
}   
let gameManager = new GameManager();    
