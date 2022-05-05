import Perso from "../caracter/Personnage.ts";
import Coffre from "./Coffre.ts";
import Fight from "../fight.ts";

export default class Salle {
    Monstres : Perso[] = []
    Chest : Coffre | null = null
    constructor() {}
    salle(place : number): number{
        if (place == 1 || place == 3) {
            let fight = new Fight();
            fight.Fight()
            return place++
        }
        else if (place == 2|| place == 4) {
            this.Chest = new Coffre();
            return place++
        }else{
            return place++
        }
    }
    showRoom() {
        
    }
}