import Monstre from "./Monstre.ts"
/**
 * la classe Zombie est une classe enfant de Monstre 
*/
export default class Zombie extends Monstre{
    name : string = "Zombie";
    ValueMaxLife = 100
    life = 100
    valueAtk = 40
    valueDef = 10
    valueVit = 40

}