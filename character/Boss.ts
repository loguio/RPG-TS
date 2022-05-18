import Monstre from "./Monstre.ts"
import Chara from "./Personnage.ts"
/**
 * la classe Boss est une classe enfant de la class Monstre il s'agit de l'ennemie final de notre jeu 
 */
export default class Boss extends Monstre{
    name : string = "Boss";
    ValueMaxLife = 300
    life = 300
    valueAtk = 70
    valueDef = 50
    valueVit = 100
    chance = 70
    /**
     * 
     * @param Ally il s'agit des jouerus alliés
     */
     AttackBoss(Ally : Chara[]){
        if(Math.floor(Math.random()*10) >=7) {
            Ally.forEach(element => {
                element.life = Math.round(Math.max(0,element.life-this.valueAtk/3))
            });
        }else {
            let ally : Chara = Ally[Math.floor(Math.random()*3)]
            while (!ally.isAlive()) {
                ally = Ally[Math.floor(Math.random()*3)]
            }
            ally.life = Math.max(ally.life-this.valueAtk+ally.valueDef,0)
        }
    }
}

// Mettre les points de vie à 500
// Il aura 70% de chance d'attaquer le joueur
// Il aura 30% de chance de faire des dégats de zone