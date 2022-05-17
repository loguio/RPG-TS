import Perso from "./Personnage.ts";
import Monster from "./Monstre.ts"

/**
 * la classe Mage est une classe enfant de Perso
 */
export default class Mage extends Perso {
    name : string = "Mage";
    mana : number = 40;
    manaMax : number = 40
    valueAtk = 30;
    valueDef = 10;
    valueVit = 30;
}

// Le Mage aura une attaque physique faible et une défense faible également. 
// Il possèdera une quantité de Mana ainsi qu'une attaque magique qui la 
// consomme, mais ignore la défense ennemie.