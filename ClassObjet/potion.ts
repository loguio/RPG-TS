import Objet from "./Objet.ts"
import Chara from "../character/Personnage.ts"

export default class Potion extends Objet {
    heal : number = 50;
    name : string = "Potion";
    /**
     * Cette function permet de soigner un personnage en lui rendant 50% de pv.
     *
     * Foncion pour heal le personnage
     * @param ally 
     */
     Healing(ally : Chara){
        console.log(ally)
        if (ally.isAlive()){ally.life = Math.min(ally.life+this.heal,ally.ValueMaxLife)}
        console.log(ally)

    }
}