import Perso from "./Personnage.ts"
/**
 * la classe Pretre est une classe enfant de la classe Perso
 */
export default class Pretre extends Perso {
    name = "Pretre"
    mana : number = 40;
    manaMax : number = 40

    Pretre(ally: Perso) {
        if (this.mana > 0) {
            ally.life += this.life/4;
            this.mana -= 10;
        }
    }
}