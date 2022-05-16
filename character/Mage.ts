import Perso from "./Personnage.ts";
import Monster from "./Monstre.ts"

export default class Mage extends Perso {
    name : string = "Mage";
    mana : number = 40;
    valueAtk = 30;
    valueDef = 10;
    valueVit = 30;
    MagicAttck(ennemi : Monster) {
        this.mana =- 20
        ennemi.life = Math.max(0,ennemi.life-this.valueAtk)
    }
}

// Le Mage aura une attaque physique faible et une défense faible également. 
// Il possèdera une quantité de Mana ainsi qu'une attaque magique qui la 
// consomme, mais ignore la défense ennemie.