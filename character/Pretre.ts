import Chara from "./Personnage.ts"
/**
 * la classe Pretre est une classe enfant de la classe Perso
 */
export default class Pretre extends Chara {
    name = "Pretre"
    mana : number = 40;
    manaMax : number = 40
    valueAtk = 40
    valueDef = 20

    /**
     * Fonction ermettant au pretre d'utiliser son pouvoir et de soigner un allier d'un quart de ses point de vie 
     * @param Ally type lise de Personnage
     */
}