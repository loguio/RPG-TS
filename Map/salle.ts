import Perso from "../caracter/Personnage.ts";
import Coffre from "./Coffre.ts";
import Fight from "../fight.ts";
import GameManager from "../GameManager.ts";

export default class Salle {
    Monstres : Perso[] = []
    Chest : Coffre | null = null
    constructor() {}
    salle(gameManager: GameManager){
        if (gameManager.place == 1 || gameManager.place == 3) {
            let fight = new Fight();
            fight.Fight()
            gameManager.place = 1;
        }
        else if (gameManager.place == 2 || gameManager.place == 4) {
            this.Chest = new Coffre();
            this.Chest.coffre(gameManager.equipe[0])
            gameManager.place = 1
        }else{
            gameManager.place =1
        }
    }
    showRoom() {
        
    }   
}