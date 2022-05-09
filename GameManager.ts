import Menu from "./menu.ts";
import Perso from "./caracter/Personnage.ts"

export default class GameManager {

    equipe: Perso[] = [];
    startGame() {
        this.equipe = new Menu().chooseCharacter();
        this.equipe.forEach(element => {
            console.log(typeof element)
        }); 
    }
}
// let gameManager = new GameManager();
// gameManager.startGame()