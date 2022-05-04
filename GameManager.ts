import {Menu} from "./menu.ts";

class GameManager {
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