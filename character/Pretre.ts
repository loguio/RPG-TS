import Chara from "./Personnage.ts"
/**
 * la classe Pretre est une classe enfant de la classe Perso
 */
export default class Pretre extends Chara {
    name = "Pretre"
    mana : number = 40;
    manaMax : number = 40
}