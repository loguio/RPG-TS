import Menu from "./menu.ts";
import Objets from "./ClassObjet/Objet.ts"
import Potion from "./ClassObjet/potion.ts"

class GameManager {
    inventory : Objets[] = [new Potion(), new Potion(), new Potion()]
    equipe: string[] = [];
    startGame() {
        this.equipe = new Menu().chooseCharacter();
        console.log(this.equipe);
    }

    fight() {
        
    }
    constructor() {
        this.startGame();
    }
}

let gameManager = new GameManager();