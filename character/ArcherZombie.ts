import Monstre from "./Monstre.ts"
/**
 * ArcherZombie est une class enfant de la class Monstre
 */
export default class ArcherZombie extends Monstre{
    name : string = "ArcherZombie";
    ValueMaxLife = 80
    life = 80
    valueAtk = 40
    valueDef = 10
    valueVit = 30

}