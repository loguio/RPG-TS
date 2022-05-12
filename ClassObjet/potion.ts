import Objet from "./Objet.ts"
import Perso from "../caracter/Personnage.ts"

export default class Potion extends Objet {
    heal : number = 50;
    name : string = "Potion"
    /**
     * Cette function permet de soigner un personnage en lui rendant 50% de pv.
     */
    Healing(ally : Perso){
        ally.life = Math.min(ally.life+this.heal,ally.ValueMaxLife)
    }
}