import Perso from "./Personnage.ts";
import Monster from "./Monstre.ts"

/**
 * la classe Paladin est une classe enfant de la classe Perso
 */
export default class Paladin extends Perso {
    name : string = "Paladin";
    sainte : number = 0;
    valueAtk = 70;
    valueDef = 50;
    valueVit = 45;
}

// Le paladin aura une attaque moins élevée que le guerrier et une défenselégèrement plus élevée. 
// Il possèdera une attaque sainte qui ciblera tous lesennemis, leur infl igeant 40% des dégats 
// d'une attaque physique ((attaque -défense adverse)*0.4)