import Chara from "./Personnage.ts";
import Monster from "./Monstre.ts"

/**
 * la classe Mage est une classe enfant de Perso
 */
export default class Mage extends Chara {
    name : string = "Mage";
    mana : number = 40;
    manaMax : number = 40
    valueAtk = 30;
    valueDef = 10;
    valueVit = 30;
    /**
     * il s'agti de l'attaque spéciale du Mage
     * @param ennemi il s'agit d'une liste de Monstre
     * 
     */
     MagicAttck(ennemi : Monster[]) {
        for (let index = 0; index < ennemi.length; index++) {
            const element = ennemi[index];
            if (element.isAlive()) {
                console.log(`${index+1}. ${element.name}`)
            }
        }
        let choose : null | string = prompt("Qui voulez vous choisir a attaquer ? >")
        while (choose == null || choose == "") {choose = prompt("Qui voulez vous choisir a attaquer ? >")}
        this.mana =- 10
        ennemi[parseInt(choose)-1].life = Math.max(0,ennemi[parseInt(choose)-1].life-this.valueAtk)
    }
}

// Le Mage aura une attaque physique faible et une défense faible également. 
// Il possèdera une quantité de Mana ainsi qu'une attaque magique qui la 
// consomme, mais ignore la défense ennemie.