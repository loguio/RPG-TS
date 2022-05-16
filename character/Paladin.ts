import Perso from "./Personnage.ts";
import Monster from "./Monstre.ts"

export default class Paladin extends Perso {
    name : string = "Paladin";
    sainte : number = 0;
    valueAtk = 70;
    valueDef = 50;
    valueVit = 45;
    Sainte(ennemies : Monster[]) {
        ennemies.forEach(element => {
            element.life = Math.max(element.life-this.valueAtk*0.4,0)
        });
    }
}

// Le paladin aura une attaque moins élevée que le guerrier et une défenselégèrement plus élevée. 
// Il possèdera une attaque sainte qui ciblera tous lesennemis, leur infl igeant 40% des dégats 
// d'une attaque physique ((attaque -défense adverse)*0.4)