import Perso from "../character/Personnage.ts"

export default class Objet {
    name : string = "Potion"
    heal : number = 50;


    Healing(ally : Perso){
        ally.life = Math.min(ally.life+this.heal,ally.ValueMaxLife)
    }
}