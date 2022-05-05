import {Menu} from "./menu.ts";
import {Perso} from "./caracter/Personnage.ts";
class GameManager {
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