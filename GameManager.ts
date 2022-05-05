import Menu from "./menu.ts";
import Objets from "./ClassObjet/Objet.ts"
import Potion from "./ClassObjet/potion.ts"
import Perso from "./caracter/Personnage.ts"

export default class GameManager {
    inventory : Objets[] = [new Potion(), new Potion(), new Potion()]
    
    equipe: Perso[] = [];
    startGame() {
        this.equipe = new Menu().chooseCharacter();
        
    }
}
// let gameManager = new GameManager();
// gameManager.startGame()    
