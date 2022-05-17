import Monstre from "./Monstre.ts"
/**
 * la classe GiantSqueleton est une classe enfant de la classe Monstre
 */
export default class GiantSqueleton extends Monstre{
    name : string = "GiantSqueleton";
    ValueMaxLife = 120
    life = 120
    valueAtk = 50
    valueDef = 20
    valueVit = 30

}