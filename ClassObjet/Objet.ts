import Perso from "../character/Personnage.ts"

export default class Objet {
    name : string = "Potion"
    heal : number = 50;

    /**
     * Foncion pour heal le personnage
     * @param ally 
     */
    Healing(ally : Perso){
        ally.life = Math.min(ally.life+this.heal,ally.ValueMaxLife)
    }
}