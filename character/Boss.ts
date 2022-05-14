import Monstre from "./Monstre.ts"
export default class Boss extends Monstre{
    name : string = "Boss";
    ValueMaxLife = 400
    life = 400
    valueAtk = 70
    valueDef = 50
    valueVit = 100

}

// Mettre les points de vie à 500
// Il aura 70% de chance d'attaquer le joueur
// Il aura 30% de chance de faire des dégats de zone
