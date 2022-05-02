import {Menu} from "./menu.ts";

class GameManager {
    startGame() {
        new Menu().chooseCharacter();
    }

    fight() {
        
    }
    constructor() {
        this.startGame();
    }
}
let gameManager = new GameManager();