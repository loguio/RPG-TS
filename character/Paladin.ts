import Chara from "./Personnage.ts";
import Monster from "./Monstre.ts"

/**
 * la classe Paladin est une classe enfant de la classe Perso
 */
export default class Paladin extends Chara {
    name : string = "Paladin";
    sainte : number = 0;
    valueAtk = 70;
    valueDef = 50;
    valueVit = 45;
     /**
     * il s'agit de l'attaque spéciale du Paladin
     * @param ennemies il s'agit de nos ennemies durant u nfight
     */
      Sainte(ennemies : Monster[]) {
        ennemies.forEach(element => {
            element.life = Math.max(element.life-this.valueAtk*0.4,0)
        });
    }
}

// Le paladin aura une attaque moins élevée que le guerrier et une défenselégèrement plus élevée. 
// Il possèdera une attaque sainte qui ciblera tous lesennemis, leur infl igeant 40% des dégats 
// d'une attaque physique ((attaque -défense adverse)*0.4)